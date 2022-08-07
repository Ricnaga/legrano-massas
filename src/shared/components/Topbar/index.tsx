import { ShoppingCart as CartIcon } from '@mui/icons-material';
import {
  AppBar,
  Badge,
  Drawer,
  Grid,
  IconButton,
  Toolbar,
} from '@mui/material';
import { useTopbar } from './hooks/useTopbar';
import { TopbarCartItems } from './TopbarCartItems/TopbarCartItems';
import { TopbarNav } from './TopbarNav/TopbarNav';

export function Topbar() {
  const {
    data: { cartItemsLength, addedItemsToCart, isOpenDrawer },
    functions: {
      openDrawer,
      closeDrawer,
      addAmountToCartItem,
      removeAmountToCartItem,
      clearItemsFromCart,
    },
  } = useTopbar();

  return (
    <AppBar position="sticky" elevation={2} color="default">
      <Toolbar>
        <Grid sx={{ flexGrow: 1 }} container alignItems="center">
          <TopbarNav />
        </Grid>
        <IconButton onClick={openDrawer}>
          <Badge badgeContent={cartItemsLength} color="primary">
            <CartIcon />
          </Badge>
        </IconButton>
        <Drawer open={isOpenDrawer} anchor="right" onClose={closeDrawer}>
          <TopbarCartItems
            cartItems={addedItemsToCart}
            addAmount={addAmountToCartItem}
            removeAmount={removeAmountToCartItem}
            clearItems={clearItemsFromCart}
          />
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
