import EventItem from '@/components/events/event-item';
import EventSearchForm from '@/components/events/event-search-form';
import { getAllEvents } from '@/lib/actions';
const AllEventsPage = async () => {
  const events = await getAllEvents();
  if (events.length < 1) {
    return (
      <h2 className="text-center">
        Sorry, there is no event at the moment.
      </h2>
    );
  }
  return (
    <section className="flex flex-col max-w-2xl  space-y-8 mx-auto my-[2rem]">
      <EventSearchForm />
      <ul className="flex flex-col space-y-8 mx-auto mt-[5rem]">
        {events.map((event) => {
          return <EventItem key={event.id} {...event} />;
        })}
      </ul>
    </section>
  );
};
export default AllEventsPage;
