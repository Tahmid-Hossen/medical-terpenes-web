// https://backend-server.nextechlify.xyz/api/wholesaler-products/prices?wholesaler_id=66faefcee5588fc2b911f45c


import {cookies} from 'next/headers';

export async function GET(req, {params: {wholesalerId}}) {
  const authToken = cookies().get('authToken')?.value;
  
  if (!authToken) {
    return new Response(JSON.stringify({error: 'Unauthorized'}), {
      status: 401,
    });
  }

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/wholesaler-products/prices?wholesaler_id=${wholesalerId}`, {
      headers: {
        Authorization: `${authToken}`,
      },
    });

    if (!response.ok) {
      return new Response(JSON.stringify({error: 'Failed to fetch data'}), {
        status: response.status,
      });
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), {status: 200});
  } catch (error) {
    return new Response(JSON.stringify({error: 'Internal Server Error'}), {
      status: 500,
    });
  }
}
