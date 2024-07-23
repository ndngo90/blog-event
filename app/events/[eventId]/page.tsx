import Comments from '@/components/input/comments';
import { Button } from '@/components/ui/button';
import { getFeaturedEvents, getEventById } from '@/lib/actions';
import Link from 'next/link';
export async function generateStaticParams() {
  const allEvents = await getFeaturedEvents();
  return allEvents.map((event) => ({
    eventId: event.id
  }));
}
const DetailEventPage = async ({
  params
}: {
  params: { eventId: string };
}) => {
  const event = await getEventById(params.eventId);
  if (!event) {
    return (
      <>
        <h1 className="capitalize text-center text-2xl font-medium mt-9">
          event not found!
        </h1>
        <div className="text-center mt-6">
          <Button asChild variant="link">
            <Link href="/events">Back to all events page</Link>
          </Button>
        </div>
      </>
    );
  }
  const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  const formattedAddress = event.location.split(', ');
  return (
    <>
      <section className="bg-fixed min-h-screen bg-event-bg">
        <div className="flex flex-col items-center p-[5rem] max-w-4xl mx-auto">
          <h1 className="font-bold text-4xl capitalize tracking-tight text-gray-50">
            {event.title}
          </h1>
          <div className="shadow-lg bg-slate-700 mt-16  rounded-lg">
            <div className="px-16 py-8 flex items-center gap-x-8">
              <img
                src={event.imageUrl}
                alt={event.title}
                className="object-cover rounded-full h-[14rem] w-[14rem] border-4 border-gray-100 mr-4"
              />
              <div>
                <div className="flex flex-col gap-y-4 mb-4">
                  <span className="text-gray-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-calendar-heart"
                    >
                      <path d="M3 10h18V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7" />
                      <path d="M8 2v4" />
                      <path d="M16 2v4" />
                      <path d="M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z" />
                    </svg>
                  </span>
                  <time className="font-bold text-gray-100">
                    {formattedDate}
                  </time>
                </div>
                <div className="flex flex-col gap-y-4">
                  <span className="text-gray-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-map-pin"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <address className="leading-tight font-medium text-gray-100">
                    {formattedAddress[0]}
                    <br />
                    {formattedAddress[1]}
                  </address>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-8 text-gray-100 text-center">
            {event.description}
          </p>
        </div>
      </section>
      <Comments eventId={params.eventId} />
    </>
  );
};
export default DetailEventPage;
