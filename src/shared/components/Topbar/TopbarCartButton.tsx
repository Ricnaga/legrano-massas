import { ShoppingCart as CartIcon } from '@mui/icons-material';
import { Badge, Drawer, IconButton } from '@mui/material';
import { useState } from 'react';

export function TopbarCartButton() {
  const [isOpenDrawer, setDrawerOpened] = useState<boolean>(false);
  const openDrawer = () => setDrawerOpened(true);
  const closeDrawer = () => setDrawerOpened(false);

  return (
    <>
      <IconButton onClick={openDrawer}>
        <Badge badgeContent={3} color="primary">
          <CartIcon />
        </Badge>
      </IconButton>
      <Drawer open={isOpenDrawer} anchor="right" onClose={closeDrawer}>
        <h1>oi</h1>
      </Drawer>
    </>
  );
}
