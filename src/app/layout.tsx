import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const vazirFont = localFont({
  src: "../../public/fonts/Vazirmatn-Regular.woff2",
});

export const metadata: Metadata = {
  title: "بیمه بازار",
  description: "تسک بیمه بازار",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazirFont.className}>{children}</body>
    </html>
  );
}
