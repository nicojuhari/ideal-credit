#!/usr/bin/env bash
# Export one social post as a 1080x1350 PNG using headless Google Chrome (no npm deps).
#   ./export.sh <template.html> <postIndex> <out.png>
# Example:
#   ./export.sh v1-standard.html 0 ../2026-09/week-2/01-john-paul-dejoria-paul-mitchell-700-dolari_1.png
# Post index = position in posts.js (0-based). Fonts load from Google Fonts, so network is required.
set -euo pipefail
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
HERE="$(cd "$(dirname "$0")" && pwd)"
TPL="$1"; IDX="${2:-0}"; OUT="${3:-$HERE/preview/${TPL%.html}_post$IDX.png}"
mkdir -p "$(dirname "$OUT")"
"$CHROME" --headless=new --hide-scrollbars --disable-gpu --force-device-scale-factor=1 \
  --window-size=1080,1350 --virtual-time-budget=6000 \
  --screenshot="$OUT" "file://$HERE/$TPL?post=$IDX" >/dev/null 2>&1
echo "$OUT"
