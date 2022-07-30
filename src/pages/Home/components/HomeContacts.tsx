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
      source: '/',
      title: '(11) 91037-1645',
    },
    {
      icon: <Instagram fontSize="large" />,
      source: '/',
      title: '@legrano_',
    },
    {
      icon: <Facebook fontSize="large" />,
      source: '/',
      title: 'legrano.culinariaartesanal',
    },
  ];
  return (
    <Grid flexDirection="column">
      {contacts.map(({ icon, source, title }) => (
        <Typography variant="h3" key={title}>
          {icon}
          <Link href={source} marginLeft={1}>
            {title}
          </Link>
        </Typography>
      ))}
    </Grid>
  );
}
