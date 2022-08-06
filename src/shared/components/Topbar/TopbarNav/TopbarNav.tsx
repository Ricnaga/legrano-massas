import { Link, Typography } from '@mui/material';

export function TopbarNav() {
  const url = [
    {
      name: 'Home',
      source: '/',
    },
    {
      name: 'Menu',
      source: '/menu',
    },
  ];
  return (
    <>
      |
      {url.map(({ name, source }) => (
        <Link
          key={source}
          underline="hover"
          color="secondary"
          href={source}
          marginX={1}
        >
          <Typography variant="h3" color="secondary">
            {name}
          </Typography>
        </Link>
      ))}
      |
    </>
  );
}
