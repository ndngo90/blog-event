'use server';
export const getAllEvents = async () => {
  const res = await fetch(
    'https://nextjs-first-step-default-rtdb.asia-southeast1.firebasedatabase.app/events.json'
  );
  const data = await res.json();
  const events = Object.entries(data).map((value: any) => {
    return {
      id: value[0],
      ...value[1]
    };
  });
  return events;
};
export const getFeaturedEvents = async () => {
  const allEvents = await getAllEvents();
  const featuredEvents = allEvents.filter(
    (event) => event.isFeatured === true
  );
  return featuredEvents;
};
export const getFilteredEvents = async (dateFilter: {
  month: number;
  year: number;
}) => {
  const { year, month } = dateFilter;
  const allEvents = await getAllEvents();
  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year &&
      eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
};
export async function getEventById(id: string) {
  const res = await fetch(
    `https://nextjs-first-step-default-rtdb.asia-southeast1.firebasedatabase.app/events/${id}.json`
  );
  const event = await res.json();
  return event;
}
