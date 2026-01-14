export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-6">회사 소개</h1>
      <div className="bg-gray-100 p-8 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-2">우리는 최고의 웹을 만듭니다.</h2>
        <p className="text-gray-700 leading-relaxed">
          안녕하세요! My Company는 고객의 비즈니스 가치를 높이기 위해 최선을 다합니다.<br />
          최신 기술 스택을 활용하여 빠르고 안정적인 웹사이트를 구축합니다.
        </p>
        <div className="mt-6 flex gap-4">
          <div className="bg-white p-4 rounded shadow text-center flex-1">
            <h3 className="font-bold text-blue-600">설립일</h3>
            <p>2025.01.01</p>
          </div>
          <div className="bg-white p-4 rounded shadow text-center flex-1">
            <h3 className="font-bold text-blue-600">프로젝트</h3>
            <p>100+ 완료</p>
          </div>
        </div>
      </div>
    </main>
  );
}