import { Facebook, Instagram, WhatsApp } from '@mui/icons-material';
import { Grid, Link, Typography } from '@mui/material';
import { ReactNode } from 'react';

type Contacts = Array<{
  icon: JSX.Element | ReactNode;
  source: string;
  title: string;
}>;

export function HomeContacts() {
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
  return (
    <Grid flexDirection="column">
      {contacts.map(({ icon, source, title }) => (
        <Grid container alignItems="center">
          {icon}
          <Typography variant="body2" key={title}>
            <Link href={source} marginLeft={1}>
              {title}
            </Link>
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
}
