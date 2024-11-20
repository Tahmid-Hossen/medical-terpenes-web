"use server"
import { cookies } from "next/headers";



export const getProfileInfo = async (id) => {
  try {
    const authToken = cookies().get('authToken')?.value; // Optional chaining for safety
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/users/${id}`,
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


export const setProfileInfo = async (id, formData) => {
  try {
    const authToken = cookies().get('authToken')?.value; // Optional chaining for safety
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/users/${id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': authToken,
        },
        body: JSON.stringify(formData),
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

export const getOrderAddress = async (id) => {
  try {
    const authToken = cookies().get('authToken')?.value; // Optional chaining for safety
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/orders/address`,
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

export const getOrderAddressById = async (id) => {
  try {
    const authToken = cookies().get('authToken')?.value; // Optional chaining for safety
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/orders/address/${id}`,
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

export const AddNewAddress = async (formData) => {
  try {
    const authToken = cookies().get('authToken')?.value; // Optional chaining for safety
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/orders/address`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': authToken,
        },
        body: JSON.stringify(formData),
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
export const updateAddress = async (formData, id) => {
  try {
    const authToken = cookies().get('authToken')?.value; // Optional chaining for safety
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/orders/address/${id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': authToken,
        },
        body: JSON.stringify(formData),
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

