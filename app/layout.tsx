import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// 방금 만든 Header 컴포넌트 불러오기
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "외주 연습 프로젝트",
  description: "Next.js로 만드는 기업 홈페이지",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        {/* 여기에 Header를 넣으면 모든 페이지 상단에 고정됩니다 */}
        <Header />
        {children}
      </body>
    </html>
  );
}