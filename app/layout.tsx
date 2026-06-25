import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "日給計算ツール｜時給と労働時間から日給目安を自動計算",
  description:
    "時給と1日の労働時間から、日給の目安を簡単に計算できる無料ツールです。アルバイトやパートの収入確認に使えます。",
  keywords: [
    "日給 計算",
    "時給 日給 計算",
    "日給 目安",
    "アルバイト 日給",
    "パート 日給",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}