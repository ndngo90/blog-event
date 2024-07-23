export default function CommentList({ comments }: { comments: any[] }) {
  // if (!comments) {
  //   return <p>loading...</p>;
  // }
  return (
    <ul className="mt-[2rem] flex flex-col gap-y-2">
      {comments &&
        comments.map((comment: any) => {
          return (
            <li
              key={comment._id}
              className="border-b border-gray-300 mb-4"
            >
              <h3 className="italic text-gray-800 text-base mb-2">
                {comment.name} has commented:
              </h3>
              <p className="text-gray-600 text-sm">{comment.comment}</p>
            </li>
          );
        })}
    </ul>
  );
}
