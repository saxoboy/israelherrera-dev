// import NavBar from '@/components/NavBar';
// import TopBar from '@/components/TopBar';
import { Cinzel, Lato } from 'next/font/google';
export const lato = Lato({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--lato-font',
});

export const cinzel = Cinzel({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--cinzel-font',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* <TopBar />
      <NavBar /> */}
      <main>{children}</main>
      <footer>footer</footer>
    </>
  );
}
