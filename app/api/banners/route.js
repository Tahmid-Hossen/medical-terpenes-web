/*
   http://localhost:4000/api/banners
   http://localhost:3000/api/banners
 */


export async function GET() {
  const url = `${process.env.API_URL}/banners`;
  const res = await fetch(url, {cache: 'no-store'})

  const data = await res.json()
  return Response.json(data)
}