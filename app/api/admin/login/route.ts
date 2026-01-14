import { NextResponse } from "next/server";
import { cookies } from "next/headers"; // 쿠키를 다루는 기능 추가

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password } = body;

  if (email === "admin" && password === "1234") {
    // 1. 로그인 성공 시 'admin_session'이라는 쿠키(도장)를 만듭니다.
    const cookieStore = await cookies();
    cookieStore.set("admin_session", "true", {
      httpOnly: true, // 자바스크립트로 조작 못하게 막음 (보안)
      path: "/",      // 사이트 전체에서 유효
    });

    return NextResponse.json({ message: "성공" }, { status: 200 });
  } else {
    return NextResponse.json({ message: "실패" }, { status: 401 });
  }
}