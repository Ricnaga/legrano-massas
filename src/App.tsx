import { RouterProvider } from './application/routes';
import { MuiProvider } from './application/theme/mui';
import { Topbar } from './shared/components/Topbar';

export function App() {
  return (
    <MuiProvider>
      <RouterProvider>
        <Topbar />
      </RouterProvider>
    </MuiProvider>
  );
}
