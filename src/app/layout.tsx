import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/header';
import type { ReactNode } from 'react';
import Providers from './Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Weather',
  description: '123',
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
