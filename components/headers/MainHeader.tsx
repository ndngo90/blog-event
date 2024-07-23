import NavLink from './nav-link';
import Link from 'next/link';

const MainHeader = () => {
  return (
    <header className="h-28 bg-slate-400 ">
      <div className="px-8 sm:px-16 md:px-24 lg:px-32 flex items-center justify-between h-full">
        <div>
          <Link
            href="/"
            className="lg:text-4xl font-extrabold text-2xl sm:text-3xl"
          >
            BlogEvents
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink href="/events">All Events</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default MainHeader;
