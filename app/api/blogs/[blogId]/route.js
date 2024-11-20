/*
   http://localhost:4000/post-details/6695739edec3398551c89f6f
   http://localhost:3000/api/post-details/6695739edec3398551c89f6f
 */


export async function GET(req, {params: {blogId}}) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/post-details/${blogId}`;
  const res = await fetch(url)

  const data = await res.json()
  return Response.json({data})
}