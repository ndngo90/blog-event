import {
  connectDatabase,
  getAllComments,
  insertDocument
} from '@/helper/db-helper';

// D76nrZFrLW6uLUEC loglivegoggle89
type commentType = {
  name: String;
  email: String;
  comment: String;
  eventId: String;
  _id: String | null;
};
export async function GET(
  request: Request,
  { params }: { params: { eventId: string } }
) {
  const eventId = params.eventId;
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
  let comments;
  try {
    comments = await getAllComments(
      client,
      'events',
      'comments',
      { _id: -1 },
      { eventId: eventId }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: 'Failed to fetch comments',
        status: 500
      })
    );
  }
  client.close();
  console.log(comments);

  return new Response(JSON.stringify({ comments: comments, status: 200 }));
}
export async function POST(
  request: Request,
  { params }: { params: { eventId: string } }
) {
  const eventId = params.eventId;
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
  const { email, name, comment } = await request.json();
  const newComment: any = { name, email, comment, eventId };
  console.log('new comment', newComment);
  try {
    const result = await insertDocument(
      client,
      'events',
      'comments',
      newComment
    );
    console.log('result', result);
    newComment._id = result.insertedId;
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: 'Failed to insert comment',
        status: 500
      })
    );
  }
  client.close();
  // revalidatePath('/events/' + eventId);
  return new Response(
    JSON.stringify({
      message: 'added comment',
      status: 201,
      comment: newComment
    })
  );
}
