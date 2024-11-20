// app/api/authenticate/route.js
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

// Function to handle the POST request
export async function POST(req) {
  try {
    const body = await req.json();

    console.log(body);

    // Make a request to your backend API to authenticate the user
    const url = `${process.env.API_URL}/login`;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    };
    const apiResponse = await fetch(url, options);
    console.log(apiResponse)
    if (!apiResponse.ok) {
      return NextResponse.json({ message: 'Authentication failed' }, { status: apiResponse.status });
    }

    const { data, error, message} = await apiResponse.json();

    console.log(data, error, message)

    if (!data) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    const expires = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000); //3 days
    cookies().set({
      name: 'authToken',
      secure: process.env.NODE_ENV === 'production', // Use HTTPS in production
      value: data?.token,
      // httpOnly: true,
      path: '/',
      expires: expires,
    });

    //  return new Response(JSON.stringify(error.response.data), { status: 400 });
    // Set the cookie in the response headers
    const response = NextResponse.json({ message: 'Authenticated successfully',  data:data});
    return response;
  } catch (error) {
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}

// Optional: If you need to handle other methods, you can define them explicitly
// export async function GET(req) {
//   return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
// }

// Only POST is defined, so all other methods will return 405 by default
