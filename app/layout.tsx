import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shihang GAO | Academic Homepage",
  description:
    "The personal academic homepage of Shihang GAO, featuring education, work experience, publications, and news.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
