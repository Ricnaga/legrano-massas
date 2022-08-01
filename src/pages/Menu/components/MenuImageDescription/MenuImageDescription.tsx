import { Grid, Typography } from '@mui/material';

type MenuImageDescriptionProps = {
  name: string;
  weight: string;
};

export function MenuImageDescription({
  name,
  weight,
}: MenuImageDescriptionProps) {
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Typography variant="body1">{name}</Typography>
      <Typography variant="body1">{weight}</Typography>
    </Grid>
  );
}
