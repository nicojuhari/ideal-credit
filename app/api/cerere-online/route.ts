import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const apiURL = process.env.ICM_API_URL;
  const secretKey = process.env.SECRET_KEY;

  if (!apiURL || !body || !secretKey) {
    return NextResponse.json({ success: false, error: "Invalid API URL or request body" });
  }

  try {
    const response = await fetch(apiURL + "/cerere-online", {
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

    if (!response.ok) {
      const text = await response.text().catch(() => "");
      console.error("ICM upstream error:", {
        status: response.status,
        statusText: response.statusText,
        cfRay: response.headers.get("cf-ray"),
        body: text,
      });
      return NextResponse.json({ success: false });
    }

    const data = await response.json();
    if (data.success) {
      return NextResponse.json({ success: true });
    }
    console.error("ICM returned success=false:", data);
    return NextResponse.json({ success: false });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "API request failed";
    console.error("API Request Failed:", message);
    return NextResponse.json({ success: false, error: message });
  }
}
