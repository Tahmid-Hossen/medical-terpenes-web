import {getOrders} from "@/services/getOrders";

export async function GET() {
  const result = await getOrders();

  if (result.error) {
    return new Response(JSON.stringify(result), {status: 500});
  }

  return new Response(JSON.stringify(result), {status: 200});
}