/*
   http://localhost:4000/categories
   http://localhost:3000/api/categories
 */

export async function GET() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/categories`;
  const res = await fetch(url)

  const data = await res.json()
  return Response.json(data)
}