import {
  Card,
  CardMedia,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from '@mui/material';
import { MenuImageDescription, MenuImagePrice } from '..';

type MenuDoughProps = Record<
  'items',
  Array<{
    name: string;
    price: number;
    weight: string;
    amount: number;
  }>
>;

export function MenuDough({ items }: MenuDoughProps) {
  return (
    <ImageList cols={3} gap={18}>
      {items.map(({ name, price, amount, weight }) => (
        <ImageListItem key={name}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image="https://source.unsplash.com/random"
            />
          </Card>
          <ImageListItemBar
            title={<MenuImageDescription name={name} weight={weight} />}
            subtitle={<MenuImagePrice price={price} amount={amount} />}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

// [
//   {
//     category: 'nhoque',
//     items: [
//       {
//         name: 'de batata',
//         weight: '1kg',
//         price: 36,
//         amount: 1,
//       },
//     ],
//   },
// ];
