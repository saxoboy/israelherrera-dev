import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import TopBar from '@/components/TopBar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopBar />
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
