import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DB Query Cost Monitor – Track Expensive AWS RDS Queries",
  description: "Monitor expensive database queries in production. Connects to AWS RDS/Aurora via CloudWatch and Performance Insights to alert when queries exceed budget thresholds."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6a0b1f6c-c4c4-430a-9a08-356dbf899627"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
