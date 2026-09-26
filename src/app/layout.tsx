import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luma Dental — A brighter smile starts here",
  description: "A premium dental clinic experience with a scroll-driven smile transformation.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
