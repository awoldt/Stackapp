import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const env = process.env.NODE_ENV;
const whitelist =
  env === "production"
    ? ["https://stackapp.xyz", process.env.TEST_SERVER_URL]
    : ["http://localhost:3000"];

export function middleware(request: NextRequest) {
  // do not send requests through middleware for GET requests
  if (request.method === "GET") {
    return NextResponse.next();
  }

  const origin = request.headers.get("origin");

  if (origin === null) {
    return new NextResponse(null, { status: 400 });
  }

  if (!whitelist.includes(origin)) {
    return new NextResponse(null, { status: 400 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};
