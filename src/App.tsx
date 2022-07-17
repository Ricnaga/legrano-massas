import { Button } from '@mui/material';
import { MuiProvider } from './application/design/mui';
import { RouterProvider } from './application/routes';

export function App() {
  return (
    <RouterProvider>
      <MuiProvider>
        <Button>Children</Button>
      </MuiProvider>
    </RouterProvider>
  )
}
