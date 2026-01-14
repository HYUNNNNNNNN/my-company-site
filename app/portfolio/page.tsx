export default function PortfolioPage() {
  return (
    <main className="max-w-6xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-8">포트폴리오</h1>
      
      {/* 3단 그리드 레이아웃 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 프로젝트 1 */}
        <div className="border rounded-lg overflow-hidden hover:shadow-lg transition">
          <div className="h-48 bg-gray-300 flex items-center justify-center text-gray-500">
            이미지 영역 (300x200)
          </div>
          <div className="p-4">
            <h3 className="font-bold text-lg">A 기업 홈페이지</h3>
            <p className="text-sm text-gray-600">Next.js로 제작된 반응형 웹사이트</p>
          </div>
        </div>

        {/* 프로젝트 2 */}
        <div className="border rounded-lg overflow-hidden hover:shadow-lg transition">
          <div className="h-48 bg-gray-300 flex items-center justify-center text-gray-500">
            이미지 영역
          </div>
          <div className="p-4">
            <h3 className="font-bold text-lg">B 쇼핑몰 구축</h3>
            <p className="text-sm text-gray-600">결제 모듈 연동 및 관리자 기능</p>
          </div>
        </div>

        {/* 프로젝트 3 */}
        <div className="border rounded-lg overflow-hidden hover:shadow-lg transition">
          <div className="h-48 bg-gray-300 flex items-center justify-center text-gray-500">
            이미지 영역
          </div>
          <div className="p-4">
            <h3 className="font-bold text-lg">C 예약 시스템</h3>
            <p className="text-sm text-gray-600">실시간 캘린더 예약 기능</p>
          </div>
        </div>
      </div>
    </main>
  );
}