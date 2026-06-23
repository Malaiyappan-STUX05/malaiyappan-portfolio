import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Malaiyappan S — Cybersecurity Engineer",
  description:
    "Portfolio of Malaiyappan S — Cybersecurity professional specializing in SIEM, SOAR, Blue Team Automation, Threat Hunting, and Cloud Security.",
  keywords: ["Cybersecurity", "Security Engineer", "SIEM", "Threat Hunting", "Blue Team", "Malaiyappan"],
  authors: [{ name: "Malaiyappan S" }],
  openGraph: {
    title: "Malaiyappan S — Cybersecurity Engineer",
    description: "Cybersecurity professional with hands-on experience at Palo Alto Networks, Zscaler, Hack Secure & NCSRC.",
    url: "https://malaiyappan.vercel.app",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}