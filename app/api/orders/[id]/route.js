import {NextResponse} from 'next/server';
import {cookies} from 'next/headers';

const getOrderDetails = async (orderId) => {
  try {
    const authToken = cookies().get('authToken')?.value;
    if (!authToken) {
      throw new Error('Authentication token not found');
    }

    console.log(authToken)

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/orders/${orderId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${authToken}`,
        },
      }
    );

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorMessage}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching order details:', error);
    return {error: true, message: error.message, data: {}};
  }
};

export async function GET(request, {params}) {
  const {id} = params;

  const orderDetails = await getOrderDetails(id)
  ;

  if (orderDetails.error) {
    return NextResponse.json({error: orderDetails.message}, {status: 500});
  }

  return NextResponse.json(orderDetails);
}