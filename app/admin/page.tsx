"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase"; // DB 도구 가져오기

// 문의 데이터의 모양(Type) 정의
type Inquiry = {
  id: number;
  created_at: string;
  name: string;
  email: string;
  message: string;
};

export default function AdminDashboard() {
  const router = useRouter();
  const [inquiries, setInquiries] = useState<Inquiry[]>([]); // 문의 목록 저장

  // 페이지가 뜰 때 실행되는 함수
  useEffect(() => {
    const fetchData = async () => {
      // 1. Supabase에서 'inquiries' 테이블의 모든 데이터를 가져옵니다.
      // order: 최신순 정렬
      const { data, error } = await supabase
        .from("inquiries")
        .select("*")
        .order("created_at", { ascending: false });

      if (data) {
        setInquiries(data); // 가져온 데이터를 화면에 저장
      }
    };

    fetchData();
  }, []);

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  };

  return (
    <div className="p-10 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">⚙️ 관리자 대시보드</h1>
        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded font-bold">
          로그아웃
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-4 border-b bg-gray-50">
          <h2 className="font-bold text-lg">📩 접수된 문의 목록 ({inquiries.length}건)</h2>
        </div>
        
        {/* 문의 목록 테이블 */}
        <table className="w-full text-left">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="p-4 text-sm font-semibold text-gray-600">날짜</th>
              <th className="p-4 text-sm font-semibold text-gray-600">이름</th>
              <th className="p-4 text-sm font-semibold text-gray-600">이메일</th>
              <th className="p-4 text-sm font-semibold text-gray-600">내용</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {inquiries.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="p-4 text-sm text-gray-500">
                  {new Date(item.created_at).toLocaleDateString()}
                </td>
                <td className="p-4 font-medium">{item.name}</td>
                <td className="p-4 text-blue-600">{item.email}</td>
                <td className="p-4 text-gray-700">{item.message}</td>
              </tr>
            ))}
            {inquiries.length === 0 && (
              <tr>
                <td colSpan={4} className="p-10 text-center text-gray-500">
                  아직 접수된 문의가 없습니다.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}