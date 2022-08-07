import { Fade, Grid, Grow } from '@mui/material';
import logo from '../../assets/logo.png';
import { HomeContacts } from './components/HomeContacts';
import { StyledAvatar, StyledGrid } from './HomePage.styled';

export function HomePage() {
  return (
    <StyledGrid
      container
      flexDirection="column"
      alignItems="center"
      justifyContent="space-around"
    >
      <Grid marginY={2}>
        <Grow in>
          <StyledAvatar src={logo} />
        </Grow>
      </Grid>
      <Fade in>
        <Grid>
          <HomeContacts />
        </Grid>
      </Fade>
    </StyledGrid>
  );
}
