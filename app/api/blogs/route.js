/*
   http://localhost:4000/get-all-post?page=1&limit=40
   http://localhost:3000/api/get-all-post
 */


export async function GET() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/get-all-post`;
  const res = await fetch(url)

  const data = await res.json()
  return Response.json({data})
}