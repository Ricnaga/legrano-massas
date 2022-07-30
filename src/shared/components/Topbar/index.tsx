import { AppBar, Link, Toolbar, Typography } from '@mui/material';

export function Topbar() {
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
    <AppBar position="sticky" elevation={2}>
      <Toolbar>
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
      </Toolbar>
    </AppBar>
  );
}
