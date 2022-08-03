import {
  Card,
  CardMedia,
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from '@mui/material';
import { MenuImageDescription, MenuImagePrice } from '..';
import { UseMenuProviderData } from '../../../../application/MenuProvider/hooks/useMenuProvider';

type MenuDoughProps = {
  menu_items: UseMenuProviderData;
};

export function MenuDough({ menu_items }: MenuDoughProps) {
  return (
    <Grid>
      <Grid>
        <Typography align="center" variant="h1" color="primary">
          {menu_items.dough}
        </Typography>
        <ImageList cols={3} gap={18}>
          {menu_items.items.map(({ name, price, weight, id }) => (
            <ImageListItem key={id}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://source.unsplash.com/random"
                />
              </Card>
              <ImageListItemBar
                title={<MenuImageDescription name={name} weight={weight} />}
                subtitle={
                  <MenuImagePrice price={price} addToCart={() => null} />
                }
                position="below"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
    </Grid>
  );
}
