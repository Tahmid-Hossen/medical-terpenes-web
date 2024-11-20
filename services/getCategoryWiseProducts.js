export async function getCategoryWiseProducts(categoryId) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/categories-wise-product/${categoryId}`, {
    next: {revalidate: 300},
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}