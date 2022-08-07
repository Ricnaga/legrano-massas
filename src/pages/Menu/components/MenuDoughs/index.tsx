import { AddShoppingCart as AddToCartIcon } from '@mui/icons-material';
import {
  Card,
  CardMedia,
  Chip,
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Tooltip,
  Typography,
} from '@mui/material';
import { useCallback } from 'react';
import { useMenuContext } from '../../../../application/menu/hooks/useMenuContext';
import { MenuActionsType } from '../../../../application/menu/menuReducer';

export function MenuDoughs() {
  const {
    data: { menuState },
    funtions: { dispatchMenu },
  } = useMenuContext();

  const onAddItemToCart = useCallback(
    (categoryId: string, itemId: string) =>
      dispatchMenu({
        action: MenuActionsType.ADD_TO_CART,
        payload: { categoryId, itemId },
      }),
    [],
  );

  return (
    <Grid>
      {menuState.map(({ id, category, items }) => (
        <Grid key={id}>
          <Typography align="center" variant="h1" color="primary">
            {category}
          </Typography>
          <ImageList cols={2} gap={18}>
            {items.map((item) => (
              <ImageListItem key={item.id}>
                <Card>
                  <Tooltip title="Em breve teremos imagens :)" placement="top">
                    <CardMedia
                      component="img"
                      height="200"
                      alt="Em desenvolvimento"
                      image="https://images.unsplash.com/photo-1584824486509-112e4181ff6b"
                    />
                  </Tooltip>
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
