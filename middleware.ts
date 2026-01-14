import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // 1. 사용자가 가려는 주소가 '/admin'으로 시작하는지 확인합니다.
  if (request.nextUrl.pathname.startsWith("/admin")) {
    
    // 2. 단, 로그인 페이지('/admin/login')는 검사하면 안 됩니다. (무한 루프 방지)
    if (request.nextUrl.pathname === "/admin/login") {
      return NextResponse.next();
    }

    // 3. 'admin_session'이라는 쿠키가 있는지 확인합니다.
    const hasSession = request.cookies.has("admin_session");

    // 4. 쿠키가 없으면 로그인 페이지로 강제 이동(Redirect) 시킵니다.
    if (!hasSession) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  // 5. 문제가 없으면 통과시킵니다.
  return NextResponse.next();
}

// 미들웨어가 동작할 주소 설정
export const config = {
  matcher: ["/admin/:path*"],
};