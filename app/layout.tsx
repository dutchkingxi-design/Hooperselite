import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HoopersElite - Basketball Academy",
  description: "Global youth basketball academy developing disciplined leaders through Excellence, Culture, Leadership, and Legacy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
