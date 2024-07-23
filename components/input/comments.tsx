'use client';
import { useState, useEffect, Suspense } from 'react';
import { Button } from '../ui/button';

import CommentList from './comment-list';
import NewComment from './new-comment';
export default function Comments({ eventId }: { eventId: string }) {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  console.log('new comments', comments);
  useEffect(() => {
    if (!showComments) {
      return;
    }

    fetch(`/api/comments/${eventId}`, { cache: 'no-cache' })
      .then((res) => res.json())
      .then((data) => {
        console.log('fetching');
        const newData = data.comments;
        console.log('new data ', newData);
        setComments(newData);
        // console.log(comments);
      });
  }, [showComments]);
  const toggleComments = () => {
    setShowComments((prevState) => !prevState);
  };
  console.log('show comments: ', showComments);
  return (
    <section className="my-[3rem] max-w-2xl mx-auto flex flex-col justify-center">
      <Button onClick={toggleComments} className="mb-[2rem] mx-auto">
        {showComments ? 'Hide' : 'Show'} Comments
      </Button>
      {showComments && <NewComment eventId={eventId} />}
      {showComments && <CommentList comments={comments} />}
      {/* <Suspense
        fallback={
          <div className="h-14 animate-pulse w-full bg-gray-400 rounded-lg mt-8"></div>
        }
      >
        <CommentList comments={comments} />
      </Suspense> */}
    </section>
  );
}
