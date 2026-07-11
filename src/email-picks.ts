import "dotenv/config";
import fs from "node:fs";
import path from "node:path";
import nodemailer from "nodemailer";

const DEFAULT_RECIPIENT = "sanjing@netopstec.com";

function latestReportPath(): string | undefined {
  if (!fs.existsSync("digests")) return undefined;
  const dates = fs
    .readdirSync("digests")
    .filter((name) => /^\d{4}-\d{2}-\d{2}$/.test(name))
    .sort()
    .reverse();
  return dates
    .map((date) => path.join("digests", date, "daily-picks.md"))
    .find((file) => fs.existsSync(file));
}

function asHtml(markdown: string): string {
  const escaped = markdown.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return `<pre style="font-family:Arial,sans-serif;white-space:pre-wrap;line-height:1.6">${escaped}</pre>`;
}

async function main(): Promise<void> {
  const host = process.env["SMTP_HOST"] ?? "";
  const user = process.env["SMTP_USER"] ?? "";
  const pass = process.env["SMTP_PASS"] ?? "";
  if (!host || !user || !pass) {
    console.log("[email-picks] SMTP secrets are not configured; skipping email delivery.");
    return;
  }

  const reportPath = latestReportPath();
  if (!reportPath) throw new Error("No daily-picks.md report was found.");
  const report = fs.readFileSync(reportPath, "utf-8");
  const date = path.basename(path.dirname(reportPath));
  const port = Number(process.env["SMTP_PORT"] ?? "587");
  const recipient = process.env["PICKS_EMAIL_TO"] ?? DEFAULT_RECIPIENT;
  const from = process.env["SMTP_FROM"] ?? user;
  const transporter = nodemailer.createTransport({ host, port, secure: port === 465, auth: { user, pass } });

  await transporter.sendMail({
    from,
    to: recipient,
    subject: `信息雷达 · ${date} · 今日 5 条推荐`,
    text: report,
    html: asHtml(report),
  });
  console.log(`[email-picks] Sent ${date} report to ${recipient}.`);
}

main().catch((err: unknown) => {
  console.error("[email-picks]", err instanceof Error ? err.message : err);
  process.exit(1);
});
