import { Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material';
import { Chip, Grid, IconButton, Typography } from '@mui/material';
import { MenuReducerData } from '../../../../application/MenuProvider/menuReducer';
import { StyledCard } from './TopbarCartItems.styled';

type TopbarCartItemsProps = Record<'cartItems', Array<MenuReducerData>> & {
  addAmount: (categoryId: string, itemId: string) => void;
  removeAmount: (categoryId: string, itemId: string) => void;
};

export function TopbarCartItems({
  cartItems,
  addAmount,
  removeAmount,
}: TopbarCartItemsProps) {
  return (
    <Grid container flexDirection="column">
      {cartItems.length ? (
        <>
          {cartItems.map(({ category, id, items }) => (
            <Grid key={id}>
              <Typography
                align="center"
                variant="h3"
                color="secondary"
                marginX={8}
              >
                {category}
              </Typography>
              <Grid
                container
                alignItems="center"
                padding={1}
                justifyContent="center"
                flexDirection="column"
              >
                {items.map((item) => (
                  <StyledCard elevation={4} key={item.id}>
                    <Typography variant="body1" color="secondary">
                      {item.name}
                    </Typography>
                    <Grid
                      container
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Grid>
                        <IconButton
                          color="secondary"
                          onClick={() => addAmount(id, item.id)}
                        >
                          <AddIcon />
                        </IconButton>
                        <Chip
                          label={
                            <Typography variant="body2">
                              x{item.amount}
                            </Typography>
                          }
                          color="primary"
                        />
                        <IconButton
                          color="secondary"
                          onClick={() => removeAmount(id, item.id)}
                        >
                          <RemoveIcon />
                        </IconButton>
                      </Grid>
                      <Typography variant="body1" color="secondary">
                        {new Intl.NumberFormat('pt-br', {
                          style: 'currency',
                          currency: 'BRL',
                        }).format(item.price * item.amount)}
                      </Typography>
                    </Grid>
                  </StyledCard>
                ))}
                <Typography
                  align="center"
                  variant="h4"
                  color="secondary"
                  marginX={8}
                >
                  Total:
                  {new Intl.NumberFormat('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(
                    items.reduce(
                      (accumulator, element) =>
                        accumulator + element.price * element.amount,
                      0,
                    ),
                  )}
                </Typography>
              </Grid>
            </Grid>
          ))}
        </>
      ) : (
        <Typography align="center" variant="h3" color="secondary" marginX={8}>
          Carrinho vazio!
        </Typography>
      )}
    </Grid>
  );
}
