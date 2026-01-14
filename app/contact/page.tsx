"use client"; // 이 줄이 있어야 버튼 클릭 등 동작이 가능합니다.

import { useState } from "react";

export default function ContactPage() {
  // 사용자가 입력한 내용을 저장할 상태(변수)들
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false); // 로딩 중인지 체크

  // 입력창에 글자를 칠 때마다 변수에 저장하는 함수
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // '문의 보내기' 버튼을 눌렀을 때 실행되는 함수
  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    setIsLoading(true); // 로딩 시작

    try {
      // 1. 아까 만든 백엔드 API로 데이터를 보냅니다.
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // 2. 성공하면 알림을 띄우고 입력창을 비웁니다.
      if (response.ok) {
        alert("문의가 성공적으로 전송되었습니다! (터미널을 확인해보세요)");
        setFormData({ name: "", email: "", message: "" }); // 초기화
      } else {
        alert("전송에 실패했습니다.");
      }
    } catch (error) {
      console.error(error);
      alert("오류가 발생했습니다.");
    } finally {
      setIsLoading(false); // 로딩 끝
    }
  };

  return (
    <main className="max-w-2xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-6">문의하기</h1>
      <p className="mb-8 text-gray-600">프로젝트 의뢰나 궁금한 점을 남겨주세요.</p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">이름</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="홍길동"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">이메일</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="example@email.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">문의 내용</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="어떤 프로젝트를 구상 중이신가요?"
          ></textarea>
        </div>
        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className="w-full bg-blue-600 text-white py-3 rounded font-bold hover:bg-blue-700 transition disabled:bg-gray-400"
        >
          {isLoading ? "전송 중..." : "문의 보내기"}
        </button>
      </div>
    </main>
  );
}