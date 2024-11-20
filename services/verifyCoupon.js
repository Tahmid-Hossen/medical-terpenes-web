"use server"
import { cookies } from "next/headers";

export const verifyCoupon = async (couponCode) => {
  try {
    const authToken = cookies().get('authToken')?.value;
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/coupons/verify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZmIwNDJhMGQwYTYyZTI3OGZiYjg5MSIsIm5hbWUiOiJBZG1pbiIsInJvbGUiOiJhZG1pbiIsInN0YXR1cyI6IkFjdGl2ZSIsImV4cCI6MTczMDMwMTU2NjYsImlhdCI6MTczMDMwMTIwNn0.BnW4-Xknchz6xUsb0A2eGpEWIxFcbulMVWpXkm35IHo',
        'Authorization': authToken,
      },
      body: JSON.stringify({coupon: couponCode}),
    });

    if (!response.ok) {
      const errorData = await response.json(); // Parse error message
      throw new Error(errorData.message || 'Failed to verify coupon');
    }

    const data = await response.json();
    return {error: false, data};
  } catch (error) {
    console.error('Error verifying coupon:', error);
    return {error: true, message: error.message || 'Invalid coupon!', data: null};
  }
};