/*
   http://localhost:4000/categories-wise-product/66a92ff241d897a8e44c8f8e
   http://localhost:3000/api/categories-wise-product/66a92ff241d897a8e44c8f8e
 */


export async function GET(req, {params: {categoryId}}) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/categories-wise-product/${categoryId}`;

  const res = await fetch(url, {next: {revalidate: 300}});

  const data = await res.json();
  return new Response(JSON.stringify({data}), {
    headers: {'Content-Type': 'application/json'},
  });
}