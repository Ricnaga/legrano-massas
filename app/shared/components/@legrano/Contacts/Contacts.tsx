import Link from 'next/link';
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from '../../../icons';
import { containerStyles, linkName, linkStyles } from './contacts.css';

export const contactItems = [
  {
    name: WhatsAppIcon.name.slice(0, -4),
    className: linkStyles({ variant: 'WhatsApp' }),
    children: <WhatsAppIcon />,
    href: 'https://wa.me/5511910371645',
  },
  {
    name: InstagramIcon.name.slice(0, -4),
    className: linkStyles({ variant: 'Instagram' }),
    children: <InstagramIcon />,
    href: 'https://www.instagram.com/legrano_',
  },
  {
    name: FacebookIcon.name.slice(0, -4),
    className: linkStyles({ variant: 'Facebook' }),
    children: <FacebookIcon />,
    href: 'https://pt-br.facebook.com/legrano.culinariaartesanal',
  },
];

export function Contacts() {
  return (
    <div className={containerStyles()}>
      {contactItems.map((item) => (
        <Link
          key={item.name}
          className={item.className}
          href={item.href}
          target="_blank"
        >
          {item.children} <span className={linkName()}>{item.name}</span>
        </Link>
      ))}
    </div>
  );
}
