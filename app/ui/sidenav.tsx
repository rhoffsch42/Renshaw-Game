'use client';

import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'Home', href: '/game'},
  { name: 'Statistics', href: '/game/statistics'},
  { name: 'About', href: '/game/about' },
];

export default function SideNav() {
  const pathname = usePathname();
  const colorGradient = 'bg-gradient-to-r from-amber-950  hover:from-amber-900';

  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              colorGradient + ' flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-amber-200 text-sm font-medium hover:text-amber-200 md:flex-none md:justify-start md:p-2 md:px-3',
              {'bg-gradient-to-r from-amber-900 text-amber-600': pathname === link.href},
            )}
          >
            <p>{link.name}</p>
          </Link>
        );
      })}
    </>

  );
}
