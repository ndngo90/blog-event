import { Button } from '../ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FormEvent, useRef } from 'react';
export default function NewComment({ eventId }: { eventId: string }) {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const commentRef = useRef<HTMLTextAreaElement | null>(null);
  const addComment = (event: FormEvent) => {
    event.preventDefault();

    const enteredName = nameRef.current?.value;
    const enteredEmail = emailRef.current?.value;
    const enteredComment = commentRef.current?.value;
    console.log(enteredName, enteredEmail, enteredComment);
    fetch(`/api/comments/${eventId}`, {
      cache: 'no-store',
      method: 'POST',
      body: JSON.stringify({
        name: enteredName,
        email: enteredEmail,
        comment: enteredComment,
        eventId: eventId
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <form onSubmit={addComment} className="flex flex-col gap-y-4">
      <div className="flex gap-x-4">
        <Input type="name" placeholder="Name" ref={nameRef} />
        <Input type="email" placeholder="Email" ref={emailRef} />
      </div>
      <Textarea placeholder="Type your message here." ref={commentRef} />
      <Button type="submit" variant="secondary" className="self-center">
        Submit
      </Button>
    </form>
  );
}
