export async function getCategories() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/categories`)
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json()
}