import { connectDatabase, insertDocument } from '@/helper/db-helper';
import { revalidatePath } from 'next/cache';
export async function POST(request: Request) {
  const { email } = await request.json();
  let client;
  try {
    client = await connectDatabase();
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: 'Failed to connect the database',
        status: 500
      })
    );
  }
  try {
    await insertDocument(client, 'newsletter', 'emails', { email: email });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: 'Failed to subscribe', status: 500 })
    );
  }
  client.close();
  return new Response(
    JSON.stringify({
      message: 'Signed up',
      status: 201
    })
  );
}
