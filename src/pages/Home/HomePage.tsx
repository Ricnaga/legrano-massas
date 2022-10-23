import { CardMedia, Fade, Grid, Grow } from '@mui/material';
import logo from '../../assets/logo.png';
import { HomeContacts } from './components/HomeContacts/HomeContacts';
import { StyledGrid } from './HomePage.styled';

export function HomePage() {
  return (
    <StyledGrid
      container
      flexDirection="column"
      alignItems="center"
      justifyContent="space-evenly"
    >
      <Grid paddingX={1}>
        <Grow in>
          <CardMedia component="img" alt="Logo do Legrano" src={logo} />
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
