"use server"

import { cookies } from "next/headers";

export const getOrderDetails = async (productId) => {
  try {
    const authToken = cookies().get('authToken')?.value;
    if (!authToken) {
      throw new Error('Authentication token not found');
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/orders/${productId}`,
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