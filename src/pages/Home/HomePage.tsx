import { Fade, Grid, Grow } from '@mui/material';
import logo from '../../assets/logo.png';
import { HomeContacts } from './components/HomeContacts';
import { StyledAvatar, StyledGrid } from './HomePage.styled';

export function HomePage() {
  return (
    <StyledGrid container>
      <Grid item xs={12} container justifyContent="center" marginY={4}>
        <Grow in>
          <StyledAvatar src={logo} />
        </Grow>
      </Grid>
      <Fade in>
        <Grid item xs={12} container justifyContent="center">
          <HomeContacts />
        </Grid>
      </Fade>
    </StyledGrid>
  );
}
