import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password } = body;

  // 하드코딩된 관리자 계정 (실무에선 DB와 대조해야 합니다)
  if (email === "admin" && password === "1234") {
    const cookieStore = await cookies();
    
    // 여기가 수정된 부분입니다!
    cookieStore.set("admin_session", "true", {
      httpOnly: true, // 자바스크립트로 탈취 방지
      path: "/",      // 모든 페이지에서 유효
      secure: process.env.NODE_ENV === 'production', // 배포(HTTPS) 환경에서만 보안 켜기
      sameSite: 'lax', // CSRF 공격 방지
      maxAge: 60 * 60 * 24, // 24시간 동안 유지
    });

    return NextResponse.json({ message: "성공" }, { status: 200 });
  } else {
    return NextResponse.json({ message: "실패" }, { status: 401 });
  }
}