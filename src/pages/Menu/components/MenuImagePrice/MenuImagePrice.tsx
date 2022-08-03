import { Chip, Grid, Typography } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';

type MenuImagePriceProps = {
  price: number;
  addToCart: () => void;
};

export function MenuImagePrice({ price, addToCart }: MenuImagePriceProps) {
  return (
    <Grid container justifyContent="space-between">
      <Grid>
        <Chip
          color="primary"
          label={
            <Grid container>
              <AddShoppingCart color="secondary" onClick={addToCart} />
              <Typography variant="body2" color="secondary">
                Adicionar ao carrinho
              </Typography>
            </Grid>
          }
        />
      </Grid>
      <Grid>
        <Typography variant="body1">
          {new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL',
          }).format(price)}
        </Typography>
      </Grid>
    </Grid>
  );
}
