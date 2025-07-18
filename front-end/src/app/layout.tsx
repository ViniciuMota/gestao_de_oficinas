import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oficina",
  description: "Sistema de organizaão de oficina.",
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
