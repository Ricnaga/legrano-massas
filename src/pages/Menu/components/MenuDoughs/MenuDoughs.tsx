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
import { getBRL } from '@shared/utils/number';
import { useMenuDoughs } from './hooks/useMenuDoughs';

export function MenuDoughs() {
  const {
    data: { menuState, imageListCols },
    functions: { onAddItemToCart },
  } = useMenuDoughs();
  return (
    <Grid>
      {menuState.map(({ id, category, items }) => (
        <Grid key={id}>
          <Typography align="center" variant="h1" color="primary">
            {category}
          </Typography>
          <ImageList cols={imageListCols} gap={18}>
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
                                Colocar no carrinho
                              </Typography>
                            </Grid>
                          }
                        />
                      </Grid>
                      <Grid>
                        <Typography variant="body1">{getBRL(36)}</Typography>
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
