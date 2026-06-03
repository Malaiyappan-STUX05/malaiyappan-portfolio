import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Malaiyappan S — Cybersecurity Engineer",
  description:
    "Cybersecurity engineer specializing in application security, threat detection, blue team operations, and security automation. Final year B.Tech CSE student at SRM Institute.",
  keywords: [
    "cybersecurity",
    "application security",
    "blue team",
    "threat detection",
    "SIEM",
    "DevSecOps",
    "security engineer",
    "penetration testing",
    "malware analysis",
    "incident response",
  ],
  authors: [{ name: "Malaiyappan S" }],
  openGraph: {
    title: "Malaiyappan S — Cybersecurity Engineer",
    description:
      "Cybersecurity engineer specializing in application security, threat detection, and security automation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-bg-primary text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
