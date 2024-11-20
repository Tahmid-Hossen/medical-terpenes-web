export async function getProductById(productId) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${productId}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json()
}