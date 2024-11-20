import { randomUUID } from 'crypto';
import { config } from 'dotenv';
import { cookies } from 'next/headers';
import { Client } from 'square';

config(); // Load environment variables from .env file

const { paymentsApi } = new Client({
  accessToken: process.env.SQUARE_ACCESS_TOKEN, // Use environment variable
  environment: 'sandbox',
});

// Function to handle BigInt serialization
const serializeBigInt = (key, value) => {
  return typeof value === 'bigint' ? value.toString() : value;
};

export const POST = async (req) => {
 
    const { sourceId, data} = await req.json();

    // Basic validation
    if (!sourceId) {
      return new Response(JSON.stringify({ error: 'sourceId is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const amountInCents = Math.round(data.total * 100);
    const { result } = await paymentsApi.createPayment({
      idempotencyKey: randomUUID(),
      sourceId: sourceId,
      amountMoney: {
        currency: 'USD',
        amount:amountInCents.toString(), // amount in cents
      },
    });

    // console.log(result);

    // Serialize response with BigInt handling
   

    const {id, orderId, locationId, approvedMoney, status, sourceType, createdAt} = result?.payment;

    if(status === "COMPLETED"){
      console.log('completed')
      const orderPayload = {
        ...data,
        payment_info : {
          transection_id: id,
          order_id: orderId,
          location_id: locationId,
          approved_money: approvedMoney,
          card_details: {
            // Card details can be added here if needed
          },
          status: status,
          source_type: sourceType,
          created_at: createdAt
        }
      }

       const serializedOrderPayload = JSON.stringify(orderPayload, serializeBigInt);

       console.log(serializedOrderPayload)

      const authToken = cookies().get('authToken').value;

      console.log('authToken' + authToken)

      const res = await fetch(`${process.env.API_URL}/api/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${authToken}`, // Add the token here
        },
        body: serializedOrderPayload,
      });

      if (res.ok) {
         const orderRes = await res.json();
         if(!orderRes.error){
           const serializedData = JSON.stringify(orderRes, serializeBigInt);
            return new Response(serializedData, {
              status: 200,
              headers: { 'Content-Type': 'application/json' },
            });
         }
        // redirect('/order-success'); // Redirect to a protected route
      } 

      return new Response(serializedOrderPayload, {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });


    }

    return new Response('Payment failed', {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
};

export const GET = async () => {
  return new Response('Method GET Not Allowed', {
    status: 405,
    headers: { 'Allow': 'POST' },
  });
}
