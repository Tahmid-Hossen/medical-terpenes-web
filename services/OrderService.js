"use server"
import { cookies } from "next/headers";

export const getOrderCount = async () => {
  try {
    const authToken = cookies().get('authToken')?.value; // Optional chaining for safety
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/dashboard/user-order-count`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': authToken,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return {error: false, data}; // Return data with error flag
  } catch (error) {
    console.error('Error fetching orders:', error);
    return {error: true, message: error.message, data: {orders: [], count: 0}};
  }
};