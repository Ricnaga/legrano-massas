import { Grid } from '@mui/material';
import { useMenuContext } from '../../application/MenuProvider/hooks/useMenuContext';
import { MenuDough } from './components/MenuDough/MenuDough';

export function MenuPage() {
  const {
    data: { menu_nhoque },
  } = useMenuContext();

  return (
    <Grid padding={2}>
      <MenuDough menu_items={menu_nhoque} />
    </Grid>
  );
}
