import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  // 1. 쿠키 저장소를 가져와서 'admin_session' 쿠키를 삭제합니다.
  const cookieStore = await cookies();
  cookieStore.delete("admin_session");

  // 2. 성공 메시지를 보냅니다.
  return NextResponse.json({ message: "로그아웃 성공" });
}