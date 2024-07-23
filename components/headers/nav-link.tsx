'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const NavLink = ({
  href,
  children
}: {
  href: string;
  children: string;
}) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`text-2xl font-medium ${
        pathname === '/events' && 'text-yellow-100'
      }`}
    >
      {children}
    </Link>
  );
};
export default NavLink;
