import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Script from 'next/script';

import Header from '@/components/Layouts/Header';
import SideBar from '@/components/Layouts/SideBar';
import { DEFAULT_SEO } from '@/constants/seo';
import ReactQueryProviders from '@/utils/react-query-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: DEFAULT_SEO.site_name,
  description: DEFAULT_SEO.description
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <Head>
        <Script
          async
          defer
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY}&loading=async`}
          type='text/javascript'
        />
        <link rel='preload' href='url_to_script' as='script' />
      </Head>
      <body className={inter.className}>
        <ReactQueryProviders>
          <Header />
          <SideBar />
          <main className='w-full bg-gray-100 py-20 pl-64 pr-4'>
            {children}
          </main>
        </ReactQueryProviders>
      </body>
    </html>
  );
}
