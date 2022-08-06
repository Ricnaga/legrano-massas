import { MenuProvider } from './application/menu';
import { RouterProvider } from './application/routes';
import { MuiProvider } from './application/theme/mui';
import { Topbar } from './shared/components/Topbar';

export function App() {
  return (
    <MuiProvider>
      <MenuProvider>
        <RouterProvider>
          <Topbar />
        </RouterProvider>
      </MenuProvider>
    </MuiProvider>
  );
}
