import type { Metadata } from 'next';
import { Karla } from 'next/font/google';
import './application/theme/global.css';
import { BottomBar, Contacts, Container } from './shared/components';
import { MenuProvider } from './contexts/menu';

const karla = Karla({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Legrano',
  description: ' | Massas artesanais',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={karla.className}>
        <Container>
          <MenuProvider>
            <Contacts />
            {children}
            <BottomBar />
          </MenuProvider>
        </Container>
      </body>
    </html>
  );
}
