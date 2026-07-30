import { NextRequest, NextResponse } from "next/server";

function joinUrl(base: string, path: string) {
  return `${base.replace(/\/+$/, "")}/${path.replace(/^\/+/, "")}`;
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const apiURL = process.env.ICM_API_URL;
  const secretKey = process.env.SECRET_KEY;

  if (!apiURL || !secretKey) {
    console.error("Missing env:", {
      hasApiURL: Boolean(apiURL),
      hasSecretKey: Boolean(secretKey),
    });
    return NextResponse.json({
      success: false,
      error: "missing_env",
    });
  }

  if (!body) {
    return NextResponse.json({ success: false, error: "invalid_body" });
  }

  const upstream = joinUrl(apiURL, "cerere-online");

  try {
    const response = await fetch(upstream, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": secretKey,
        "User-Agent": "IdealCredit-Website/1.0",
        Accept: "application/json",
        "X-Requested-With": "XMLHttpRequest",
      },
      body: JSON.stringify(body),
    });

    const text = await response.text().catch(() => "");

    if (!response.ok) {
      console.error("ICM upstream error:", {
        upstream,
        status: response.status,
        statusText: response.statusText,
        cfRay: response.headers.get("cf-ray"),
        cfMitigated: response.headers.get("cf-mitigated"),
        server: response.headers.get("server"),
        body: text.slice(0, 500),
      });
      return NextResponse.json({
        success: false,
        error: "upstream_http",
        status: response.status,
      });
    }

    let data: { success?: boolean } = {};
    try {
      data = text ? JSON.parse(text) : {};
    } catch {
      console.error("ICM returned non-JSON:", text.slice(0, 500));
      return NextResponse.json({ success: false, error: "upstream_non_json" });
    }

    if (data.success) {
      return NextResponse.json({ success: true });
    }

    console.error("ICM returned success=false:", data);
    return NextResponse.json({ success: false, error: "upstream_rejected" });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "API request failed";
    console.error("API Request Failed:", { upstream, message });
    return NextResponse.json({ success: false, error: "upstream_fetch", message });
  }
}
