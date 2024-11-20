import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

// Function to handle the POST request
export async function POST(req) {
  try {
    cookies().set('authToken', '', { 
      path: '/', 
      expires: new Date(0), 
      secure: true, 
      httpOnly: true, 
      sameSite: 'Strict' 
    });
    // Set the cookie in the response headers
    const response = NextResponse.json({ message: 'Logout successfully' });
    return response;
  } catch (error) {
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
