import https from "node:https";
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const ASSETS = [
  "https://vietlicense.org/assets/img/logo-trimmed.png",
  "https://vietlicense.org/assets/img/logo-icon.png",
  "https://vietlicense.org/assets/img/favicon.svg",
  "https://vietlicense.org/assets/img/favicon-32.png",
  "https://vietlicense.org/assets/img/optimized/favicon-64.png",
  "https://vietlicense.org/assets/img/favicon-app.png",
  "https://vietlicense.org/assets/img/favicon-180.png",
  "https://vietlicense.org/assets/img/meta-banner.png",
  "https://vietlicense.org/assets/img/hero/hero-windows-10-11.png",
  "https://vietlicense.org/assets/img/hero/hero-office-365.png",
  "https://vietlicense.org/assets/img/hero/hero-office-2021-pro-plus.png",
  "https://vietlicense.org/assets/img/hero/hero-office-2019-pro-plus.png",
  "https://vietlicense.org/assets/img/hero/hero-windows-server-2019.png",
  "https://vietlicense.org/assets/img/hero/hero-sql-server-2022.png",
  "https://vietlicense.org/assets/img/optimized/win11pro-720.png",
  "https://vietlicense.org/assets/img/optimized/officepro2021-720.png",
  "https://vietlicense.org/assets/img/optimized/officepro2019-720.png",
  "https://vietlicense.org/assets/img/office2024.png",
  "https://vietlicense.org/assets/img/products/windows-server-2019-packshot.png",
  "https://vietlicense.org/assets/img/products/sql-server-2022-packshot.png",
  "https://vietlicense.org/assets/img/optimized/microsoft-marketplace-partner-800.jpg",
  "https://vietlicense.org/assets/img/optimized/vat-invoice-sample-800.jpg"
];

function download(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith("https") ? https : http;
    const req = client.get(url, { headers: { "user-agent": "Mozilla/5.0" } }, (res) => {
      if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location).then(resolve).catch(reject);
      }
      if (res.statusCode && res.statusCode !== 200) {
        return reject(new Error(`Failed ${url}: ${res.statusCode}`));
      }
      const chunks = [];
      res.on("data", (chunk) => chunks.push(chunk));
      res.on("end", () => resolve(Buffer.concat(chunks)));
      res.on("error", reject);
    });
    req.on("error", reject);
  });
}

async function main() {
  const seen = new Set();
  for (const url of ASSETS) {
    const urlPath = new URL(url).pathname;
    const relative = urlPath.replace(/^\/assets\/img\//, "");
    let dest;
    if (relative.startsWith("favicon") || relative.startsWith("meta-")) {
      dest = path.join(root, "public", "seo", path.basename(relative));
    } else if (relative.startsWith("hero/")) {
      dest = path.join(root, "public", "images", "hero", path.basename(relative));
    } else if (relative.startsWith("products/")) {
      dest = path.join(root, "public", "images", "products", path.basename(relative));
    } else {
      dest = path.join(root, "public", "images", "optimized", path.basename(relative));
    }

    if (seen.has(dest)) continue;
    seen.add(dest);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    try {
      const buffer = await download(url);
      fs.writeFileSync(dest, buffer);
      console.log("downloaded", url, "->", dest);
    } catch (error) {
      console.error("download failed", url, error.message);
    }
  }
}

main();
