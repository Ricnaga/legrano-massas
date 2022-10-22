import { Facebook, Instagram, WhatsApp } from '@mui/icons-material';
import { Grid, Link, Typography } from '@mui/material';
import { ReactNode } from 'react';

type Contacts = Array<
  { icon: JSX.Element | ReactNode } & Record<'source' | 'title', string>
>;

const contacts: Contacts = [
  {
    icon: <WhatsApp fontSize="large" />,
    source: 'https://wa.me/5511910371645',
    title: '(11) 91037-1645',
  },
  {
    icon: <Instagram fontSize="large" />,
    source: 'https://www.instagram.com/legrano_',
    title: '@legrano_',
  },
  {
    icon: <Facebook fontSize="large" />,
    source: 'https://pt-br.facebook.com/legrano.culinariaartesanal',
    title: 'legrano.culinariaartesanal',
  },
];

export function HomeContacts() {
  return (
    <Grid flexDirection="column">
      {contacts.map(({ icon, source, title }) => (
        <Grid container alignItems="center" key={title}>
          {icon}
          <Typography variant="body2">
            <Link href={source} marginLeft={1}>
              {title}
            </Link>
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
}
