import { ShoppingCart as CartIcon } from '@mui/icons-material';
import {
  AppBar,
  Badge,
  Drawer,
  Grid,
  IconButton,
  SwipeableDrawer,
  Toolbar,
} from '@mui/material';
import { useTopbar } from './hooks/useTopbar';
import { TopbarCartItems } from './TopbarCartItems/TopbarCartItems';
import { TopbarNav } from './TopbarNav/TopbarNav';

export function Topbar() {
  const {
    data: { cartItemsLength, addedItemsToCart, isOpenDrawer, totalPrice },
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
        <SwipeableDrawer
          open={isOpenDrawer}
          anchor="right"
          onOpen={openDrawer}
          onClose={closeDrawer}
        >
          <TopbarCartItems
            totalPrice={totalPrice}
            cartItems={addedItemsToCart}
            addAmount={addAmountToCartItem}
            removeAmount={removeAmountToCartItem}
            clearItems={clearItemsFromCart}
          />
        </SwipeableDrawer>
      </Toolbar>
    </AppBar>
  );
}
