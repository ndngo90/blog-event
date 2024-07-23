import Link from 'next/link';
import { Button } from '../ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import Image from 'next/image';
type eventType = {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  imageUrl: string;
  isFeatured: boolean;
};
const EventItem = ({ id, title, location, date, imageUrl }: eventType) => {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  const formattedAddress = location.split(', ');
  const eventLink = '/events/' + id;
  return (
    <div className="w-full rounded overflow-hidden shadow-lg flex flex-col sm:flex-row mx-auto border border-gray-100">
      <img
        src={imageUrl}
        alt={title}
        className="object-cover w-full sm:w-[40%] max-h-[232px]"
      />
      <div className="grow flex flex-col gap-y-8 m-4">
        <div className="flex flex-col space-y-2">
          <h2 className="text-2xl font-bold my-2 sm:my-4 text-gray-700">
            {title}
          </h2>
          <div className="flex items-center gap-x-4">
            <span className="text-gray-600">
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
            <time className="font-bold text-gray-600">
              {formattedDate}
            </time>
          </div>
          <div className="flex items-center gap-x-4">
            <span className="text-gray-600">
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
            <address className="leading-tight font-medium text-gray-600">
              {formattedAddress[0]}
              <br />
              {formattedAddress[1]}
            </address>
          </div>
        </div>
        <div className="self-end">
          <Button asChild variant="secondary">
            <Link href={eventLink} className="flex items-center gap-x-2 ">
              <span className="uppercase text-gray-600">explore</span>
              <span className="text-gray-600">
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
                  className="lucide lucide-arrow-right"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default EventItem;
