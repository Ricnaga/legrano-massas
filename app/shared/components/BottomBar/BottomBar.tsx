'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode, useState } from 'react';
import { CartIcon } from '../../icons';
import { container, linkStyles } from './bottomBar.css';
import { Drawer } from '..';

const items: Array<{ route: string; children: ReactNode }> = [
  { route: '/', children: 'Home' },
  { route: '/menu', children: 'Cardápio' },
  {
    route: '/cart',
    children: <CartIcon />,
  },
];

export function BottomBar() {
  const pathname = usePathname();

  const [isOpen, setAsOpen] = useState<boolean>(false);

  return (
    <>
      <Drawer isOpen={isOpen} onClose={() => setAsOpen(false)}>
        <p>Oi</p>
      </Drawer>
      <nav className={container}>
        {items.map((item) =>
          item.route !== '/cart' ? (
            <Link
              key={item.route}
              className={linkStyles({
                isActive: Object.is(pathname, item.route),
              })}
              href={item.route}
            >
              {item.children}
            </Link>
          ) : (
            <button
              key={item.route}
              className={linkStyles({
                isActive: Object.is(pathname, item.route),
                isIcon: true,
              })}
              onClick={() => setAsOpen(true)}
            >
              {item.children}
            </button>
          ),
        )}
      </nav>
    </>
  );
}
