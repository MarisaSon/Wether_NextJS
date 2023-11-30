import type { Metadata } from 'next';
import Header from '@/components/header';
import type { ReactNode } from 'react';
import Providers from './Providers';
import Footer from '@/components/footer';
import Content from '@/components/content';

export const metadata: Metadata = {
  title: 'Weather',
  description: '123',
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <Content>{children}</Content>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
