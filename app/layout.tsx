import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SnippetRec — Record Browser Actions as Automation Scripts",
  description: "Record clicks, typing, and navigation then export Playwright or Selenium scripts instantly. Built for QA engineers and developers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="7deeceb7-5a23-49ea-bc79-c8fbc0b3c511"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
