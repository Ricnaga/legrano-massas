import { Card, css, styled } from '@mui/material';

export const StyledCard = styled(Card)(
  ({ theme }) => css`
    padding: ${theme.spacing(1)};
    margin-top: ${theme.spacing(1)};
    width: 100%;
  `,
);
