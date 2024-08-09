import type { Metadata } from 'next';
import { Karla } from 'next/font/google';
import './application/theme/global.css';
import { ComposeProviders } from './contexts/compose';
import { Container } from './shared/components';
import { Contacts, BottomBar } from './shared/components/@legrano';

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
          <ComposeProviders>
            <Contacts />
            {children}
            <BottomBar />
          </ComposeProviders>
        </Container>
      </body>
    </html>
  );
}
