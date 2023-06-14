import { ReactNode } from 'react';

import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import TopBar from '@/components/TopBar';

//import { PortfolioProvider } from '@/context/PortfolioContext';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <TopBar />
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
