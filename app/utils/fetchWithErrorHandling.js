// export async function fetchWithErrorHandling(url) {
//   try {
//     const res = await fetch(url);
//     const data = await res.text();
//
//     if (!res.ok) {
//       return new Response(JSON.stringify({error: data || 'Error fetching data'}), {
//         status: res.status,
//         headers: {'Content-Type': 'application/json'},
//       });
//     }
//
//     return new Response(JSON.stringify(data), {status: 200, headers: {'Content-Type': 'application/json'}});
//   } catch (error) {
//     return new Response(JSON.stringify({error: 'Network error'}), {
//       status: 500,
//       headers: {'Content-Type': 'application/json'},
//     });
//   }
// }

export async function fetchWithErrorHandling(url, options = {}, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url, options);
      const data = await res.text();

      if (!res.ok) {
        return new Response(JSON.stringify({error: data || 'Error fetching data'}), {
          status: res.status,
          headers: {'Content-Type': 'application/json'},
        });
      }

      return new Response.json(data);
    } catch (error) {
      if (i === retries - 1) {
        const errorMessage = error.cause && error.cause.code === 'ECONNREFUSED'
          ? 'Connection refused. Please ensure the server is running.'
          : 'Network error';
        return new Response(JSON.stringify({error: errorMessage}), {
          status: 500,
          headers: {'Content-Type': 'application/json'},
        });
      }
    }
  }
}