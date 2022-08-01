import { Chip, Grid, IconButton, Typography } from '@mui/material';
import { Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material';

type MenuImagePriceProps = {
  price: number;
  amount: number;
};

export function MenuImagePrice({ price, amount }: MenuImagePriceProps) {
  return (
    <Grid container justifyContent="space-between">
      <Grid>
        <IconButton color="primary">
          <AddIcon />
        </IconButton>
        <Chip
          label={<Typography variant="body2">{amount}</Typography>}
          color="primary"
        />
        <IconButton color="primary">
          <RemoveIcon />
        </IconButton>
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
