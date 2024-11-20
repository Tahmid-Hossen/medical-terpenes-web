// app/middleware.js
import { parse } from 'cookie';
import { NextResponse } from 'next/server';

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  // Define protected routes
  const protectedRoutes = ['/dashboard', '/profile'];

  // If the route is protected
  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    const cookies = parse(req.headers.get('cookie') || '');
    // const token = cookies.authToken;

    // if (!token) {
    //   // Redirect to login if no token is found
    //   const url = req.nextUrl.clone();
    //   url.pathname = '/login';
    //   return NextResponse.redirect(url);
    // }

    // try {
    //   // Verify the token
    //   jwt.verify(token, process.env.JWT_SECRET);
    // } catch (err) {
    //   // Redirect to login if the token is invalid
    //   const url = req.nextUrl.clone();
    //   url.pathname = '/login';
    //   return NextResponse.redirect(url);
    // }
  }

  // Continue to the requested route
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard', '/profile'], // Specify routes that require authentication
};
