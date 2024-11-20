/*
   http://localhost:4000/product-details/66a92d913325c5277591a7b2
   http://localhost:3000/api/products/66a92d913325c5277591a7b2
 */


export async function GET(req, {params: {productId}}) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/get-product-info?id=${productId}`;
  const res = await fetch(url, { cache: 'no-store' })

  const data = await res.json()
  return Response.json({data})
}
