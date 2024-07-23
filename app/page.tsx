import EventsList from '@/components/events/events-list';
import NewsletterRegistration from '@/components/input/newsletter-regisrtation';
import { getFeaturedEvents } from '@/lib/actions';
const eventType = {
  description: String,
  imageUrl: String,
  isFeatured: Boolean,
  location: String,
  title: String
};
export const revalidate = 10;
export default async function Home() {
  const featuredEvents = await getFeaturedEvents();

  return (
    <main>
      <NewsletterRegistration />
      <EventsList items={featuredEvents} />
    </main>
  );
}
// https://nextjs-first-step-default-rtdb.asia-southeast1.firebasedatabase.app/events
