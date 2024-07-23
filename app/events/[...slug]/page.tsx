import EventItem from '@/components/events/event-item';
import { Button } from '@/components/ui/button';
import { getFilteredEvents } from '@/lib/actions';
import Link from 'next/link';

const FilteredEventsPage = async ({
  params
}: {
  params: { slug: string[] };
}) => {
  const month = params.slug[0];
  const year = params.slug[1];

  const filteredEvents = await getFilteredEvents({
    year: Number(month),
    month: Number(year)
  });
  if (filteredEvents.length < 1) {
    return (
      <div className="mt-[2rem] flex flex-col justify-center">
        <h1 className="text-center text-2xl font-medium">
          Sorry, there no events on this date.
        </h1>
        <Button asChild variant="link" className="mt-8">
          <Link href="/events">Back to Events Page</Link>
        </Button>
      </div>
    );
  }
  const date = new Date(Number(month), Number(year) - 1);
  const readableDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long'
  });
  return (
    <section className="flex flex-col max-w-2xl mx-auto">
      <h3 className="text-center font-bold text-xl p-4 text-gray-800">
        Events in <time className=" italic">{readableDate}</time>
      </h3>
      <div className="flex-none mx-auto">
        <Button asChild>
          <Link href="/events">Browse all events</Link>
        </Button>
      </div>

      <ul className="flex flex-col space-y-8 mx-auto my-[2rem]">
        {filteredEvents.map((event) => {
          return <EventItem key={event.id} {...event} />;
        })}
      </ul>
    </section>
  );
};
export default FilteredEventsPage;
