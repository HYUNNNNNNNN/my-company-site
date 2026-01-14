"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // 페이지 이동을 위해 필요

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // 백엔드 API로 아이디/비번을 보냅니다.
    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      alert("로그인 성공!");
      router.push("/admin"); // 로그인 성공 시 관리자 메인으로 이동
    } else {
      alert("아이디 또는 비밀번호가 틀렸습니다.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">관리자 로그인</h1>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">아이디</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="admin"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">비밀번호</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="1234"
            />
          </div>
          <button
            onClick={handleLogin}
            className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-700 font-bold"
          >
            로그인
          </button>
        </div>
      </div>
    </div>
  );
}