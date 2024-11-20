import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(req) {
  const authToken  = cookies().get('authToken');
  // console.log(authToken)
  if (!authToken) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 200 });
  }
  return NextResponse.json({message: 'Authorized'});return NextResponse.json({message: 'Authorized'});
}
