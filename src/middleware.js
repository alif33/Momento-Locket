import { NextResponse } from 'next/server';
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const __tx__ = request.cookies.get("__tx__")?.value;
  const unProtected = request.nextUrl.pathname === "/auth/signin" || request.nextUrl.pathname === "/auth/signup";
  
  if(unProtected){
    if(__tx__){
      return NextResponse.redirect(new URL("/", request.url));  
    }
  }else{
    if(!__tx__){
      return NextResponse.redirect(new URL("/auth/signin", request.url));  
    }
  }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/auth/change-password',
    '/auth/signin',
    '/auth/signup',
    '/account',
    '/account/address',
    '/account/details',
    '/account/orders',
  ]
}