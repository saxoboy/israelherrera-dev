import Footer from '@/components/Footer';
import UnderlineLink from '@/components/links/UnderlineLink';
import NavBar from '@/components/NavBar';
import TopBar from '@/components/TopBar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopBar />
      <NavBar />
      <main>{children}</main>
      <Footer />
      <div className='bg-black py-2 text-center text-sm text-white'>
        © Copyrigth 2023 - Made with ❤️ by{' '}
        <UnderlineLink
          href='https://www.linkedin.com/in/israelherrerae'
          target='_blank'
        >
          Israel H.
        </UnderlineLink>
      </div>
    </>
  );
}
