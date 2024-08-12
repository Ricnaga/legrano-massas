import dynamic from 'next/dynamic';
import type { Metadata } from 'next';
import { Karla } from 'next/font/google';
import './application/theme/global.css';
import { Container } from './shared/components';
import { Contacts, BottomBar } from './shared/components/@legrano';

const karla = Karla({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Legrano',
  description: ' | Massas artesanais',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const ComposeProviders = dynamic(
  () => import('./contexts/compose').then((mod) => mod.ComposeProviders),
  { ssr: false },
);

export default function RootLayout({ children }: RootLayoutProps) {
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
