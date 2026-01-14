import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase"; // 방금 만든 연결 도구 가져오기

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, message } = body;

  // Supabase의 'inquiries' 테이블에 데이터 넣기 (insert)
  const { error } = await supabase
    .from("inquiries")
    .insert([{ name, email, message }]);

  if (error) {
    console.error(error);
    return NextResponse.json({ message: "저장 실패" }, { status: 500 });
  }

  return NextResponse.json({ message: "성공적으로 저장되었습니다!" });
}