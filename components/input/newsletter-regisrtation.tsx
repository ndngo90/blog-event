'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FormEvent, useRef } from 'react';

const NewsletterRegistration = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const subscribeHandler = (event: FormEvent) => {
    event.preventDefault();
    const email = emailRef.current?.value;
    if (!email || !email.includes('@')) {
      return;
    }
    const reqBody = {
      email
    };
    fetch('/api/subscribe', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <form
      onSubmit={subscribeHandler}
      className="flex w-full max-w-sm items-center space-x-2 mt-[2rem] mx-auto"
    >
      <Input type="email" placeholder="Email" ref={emailRef} />
      <Button type="submit">Subscribe</Button>
    </form>
  );
};
export default NewsletterRegistration;
