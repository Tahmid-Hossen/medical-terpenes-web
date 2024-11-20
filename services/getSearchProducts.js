// http://localhost:4000/categories-wise-product/all?globalFilter=GWThRQ

export const getSearchProducts = async (query = 'GWThRQ') => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories-wise-product/all?globalFilter=${query}`, {cache: "no-store"});
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching search products:', error);
    return {error: true, message: error.message, data: {products: [], count: 0}};
  }
};