import {
  ShoppingCart as CartIcon,
  Add as AddIcon,
  Remove as RemoveIcon,
} from '@mui/icons-material';
import {
  Badge,
  Card,
  Chip,
  css,
  Drawer,
  Grid,
  IconButton,
  styled,
  Typography,
} from '@mui/material';
import { useState } from 'react';

const StyledCard = styled(Card)(
  ({ theme }) => css`
    padding: ${theme.spacing(1)};
  `,
);

export function TopbarCartButton() {
  const [isOpenDrawer, setDrawerOpened] = useState<boolean>(false);
  const openDrawer = () => setDrawerOpened(true);
  const closeDrawer = () => setDrawerOpened(false);

  return (
    <>
      <IconButton onClick={openDrawer}>
        <Badge badgeContent={3} color="primary">
          <CartIcon />
        </Badge>
      </IconButton>
      <Drawer open={isOpenDrawer} anchor="right" onClose={closeDrawer}>
        <Grid>
          <Typography align="center" variant="h3" color="secondary" marginX={8}>
            NHOQUE
          </Typography>
          <Grid
            container
            alignItems="center"
            padding={1}
            justifyContent="center"
          >
            <StyledCard elevation={4}>
              <Typography variant="body1" color="secondary">
                Mandioca recheada de carne seca/queijo
              </Typography>
              <Grid
                container
                alignItems="center"
                justifyContent="space-between"
              >
                <Grid>
                  <IconButton color="secondary">
                    <AddIcon />
                  </IconButton>
                  <Chip
                    label={<Typography variant="body2">x1</Typography>}
                    color="primary"
                  />
                  <IconButton color="secondary">
                    <RemoveIcon />
                  </IconButton>
                </Grid>
                <Typography variant="body1" color="secondary">
                  {new Intl.NumberFormat('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(36)}
                </Typography>
              </Grid>
            </StyledCard>
          </Grid>
        </Grid>
      </Drawer>
    </>
  );
}
