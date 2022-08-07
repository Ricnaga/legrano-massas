import {
  Card,
  CardMedia,
  Chip,
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from '@mui/material';
import { AddShoppingCart as AddToCartIcon } from '@mui/icons-material';
import { useMenuContext } from '../../../../application/menu/hooks/useMenuContext';
import { MenuActionsType } from '../../../../application/menu/menuReducer';

export function MenuDoughs() {
  const {
    data: { menuState },
    funtions: { dispatchMenu },
  } = useMenuContext();

  const onAddItemToCart = (categoryId: string, itemId: string) =>
    dispatchMenu({
      action: MenuActionsType.ADD_TO_CART,
      payload: { categoryId, itemId },
    });

  return (
    <Grid>
      {menuState.map(({ id, category, items }) => (
        <Grid key={id}>
          <Typography align="center" variant="h1" color="primary">
            {category}
          </Typography>
          <ImageList cols={3} gap={18}>
            {items.map((item) => (
              <ImageListItem key={item.id}>
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image="https://images.unsplash.com/photo-1584824486509-112e4181ff6b"
                  />
                </Card>
                <ImageListItemBar
                  title={
                    <Grid
                      container
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography variant="body1">{item.name}</Typography>
                      <Typography variant="body1">{item.weight}</Typography>
                    </Grid>
                  }
                  subtitle={
                    <Grid container justifyContent="space-between">
                      <Grid>
                        <Chip
                          disabled={item.selected}
                          onClick={() => onAddItemToCart(id, item.id)}
                          color="primary"
                          label={
                            <Grid container>
                              <AddToCartIcon color="secondary" />
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
                          }).format(36)}
                        </Typography>
                      </Grid>
                    </Grid>
                  }
                  position="below"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
      ))}
    </Grid>
  );
}
