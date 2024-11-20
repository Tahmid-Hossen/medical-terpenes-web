/*
 not inplemented
 */

export async function GET(req, {params: {categoryId}}) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/categories/${categoryId}`;
  const res = await fetch(url)

  const data = await res.json()
  return Response.json({data})
}