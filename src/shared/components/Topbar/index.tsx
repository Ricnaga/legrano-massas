import { AppBar, Grid, Toolbar } from '@mui/material';
import { TopbarCartButton } from './TopbarCartButton';
import { TopbarMenu } from './TopbarMenu';

export function Topbar() {
  return (
    <AppBar position="sticky" elevation={2} color="default">
      <Toolbar>
        <Grid sx={{ flexGrow: 1 }} container alignItems="center">
          <TopbarMenu />
        </Grid>
        <TopbarCartButton />
      </Toolbar>
    </AppBar>
  );
}
