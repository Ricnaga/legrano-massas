import { Grid, Typography } from '@mui/material';
import { useCart } from '../../application/CartProvider/hooks/useCart';
import { MenuDough } from './components/MenuDough/MenuDough';

export function MenuPage() {
  const {
    data: { menu_items },
  } = useCart();

  return (
    <Grid padding={2}>
      {menu_items.map(({ dough, items }) => (
        <Grid key={dough}>
          <Typography align="center" variant="h1" color="primary">
            {dough}
          </Typography>
          <MenuDough items={items} />
        </Grid>
      ))}
    </Grid>
  );
}
