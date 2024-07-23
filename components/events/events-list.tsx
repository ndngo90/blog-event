import EventItem from './event-item';

type eventsType = {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  image: string;
  isFeatured: boolean;
};

const EventsList = ({ items }: { items: eventsType[] }) => {
  return (
    <ul className="flex flex-col max-w-2xl  space-y-8 mx-auto my-[5rem]">
      {items.map((item) => {
        return <EventItem key={item.id} {...item} />;
      })}
    </ul>
  );
};
export default EventsList;
