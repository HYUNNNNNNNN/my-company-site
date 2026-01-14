import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 shadow-md bg-white">
      {/* 왼쪽: 로고 */}
      <div className="text-2xl font-bold text-blue-600">
        <Link href="/">MY Company</Link>
      </div>

      {/* 오른쪽: 네비게이션 메뉴 */}
      <nav>
        <ul className="flex gap-6 text-gray-600 font-medium">
          <li className="hover:text-blue-500 cursor-pointer">
            <Link href="/about">회사소개</Link>
          </li>
          <li className="hover:text-blue-500 cursor-pointer">
            <Link href="/portfolio">포트폴리오</Link>
          </li>
          <li className="hover:text-blue-500 cursor-pointer">
            <Link href="/contact">문의하기</Link>
          </li>
          {/* 관리자 버튼은 살짝 다르게 디자인 */}
          <li className="hover:text-blue-500 cursor-pointer text-red-500">
            <Link href="/admin">관리자</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}