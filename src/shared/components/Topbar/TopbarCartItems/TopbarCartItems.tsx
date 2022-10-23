import {
  Add as AddIcon,
  CleaningServices as CleanIcon,
  Remove as RemoveIcon,
  WhatsApp as WhatsAppIcon,
} from '@mui/icons-material';
import {
  Button,
  Chip,
  Fade,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import { MenuReducerData } from '../../../../application/menu/menuReducer';
import { getBRL } from '../../../utils/number';
import { useTopbarCartItems } from './hooks/useTopbarCartItems';
import { StyledCard } from './TopbarCartItems.styled';

type TopbarCartItemsProps = Record<'cartItems', Array<MenuReducerData>> &
  Record<
    'addAmount' | 'removeAmount',
    (categoryId: string, itemId: string) => void
  > &
  Record<'totalPrice' | 'whatsAppText', string> & {
    clearItems: () => void;
  };

export function TopbarCartItems({
  cartItems,
  totalPrice,
  whatsAppText,
  addAmount,
  removeAmount,
  clearItems,
}: TopbarCartItemsProps) {
  const {
    data: { drawerOnMObile },
  } = useTopbarCartItems();

  return (
    <Grid container flexDirection="column" width={drawerOnMObile}>
      {cartItems.length ? (
        <>
          {cartItems.map(({ category, id, items }) => (
            <Grid key={id}>
              <Typography align="center" variant="h3" color="secondary">
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
                        {getBRL(item.price * item.amount)}
                      </Typography>
                    </Grid>
                  </StyledCard>
                ))}
              </Grid>
            </Grid>
          ))}
          <Grid container justifyContent="space-between" paddingX={1}>
            <Grid item xs={12} container justifyContent="center" marginY={1}>
              <Typography variant="h4" color="secondary">
                Total:{totalPrice}
              </Typography>
            </Grid>
            <Grid container item xs={5}>
              <Button
                color="warning"
                variant="contained"
                onClick={clearItems}
                fullWidth
              >
                <CleanIcon />
                <Typography variant="subtitle1">Limpar</Typography>
              </Button>
            </Grid>
            <Grid container item xs={5}>
              <Button
                color="success"
                variant="contained"
                fullWidth
                href={`http://wa.me/5511910371645?text=${whatsAppText}`}
              >
                <WhatsAppIcon />
                <Typography variant="subtitle1">Me manda no zap</Typography>
              </Button>
            </Grid>
          </Grid>
        </>
      ) : (
        <Fade in>
          <Typography align="center" variant="h3" color="secondary" marginX={8}>
            Carrinho vazio!
          </Typography>
        </Fade>
      )}
    </Grid>
  );
}
