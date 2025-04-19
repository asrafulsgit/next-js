export async function POST(request) {
     const body =request;
     console.log(body)
     return Response.json({ message: 'Hello from API!' });
   }    