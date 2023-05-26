import MenuMain from '@/components/MenuMain';
import SocialMedia from '@/components/SocialMedia/SocialMedia';

const Footer = () => {
  return (
    <footer className='bg-primary-950 py-8'>
      <div className='container mx-auto px-4'>
        <h2 className='pb-8 text-center text-7xl text-secondary-500'>{`<Get in touch />`}</h2>
        <div className='flex items-center justify-center'>
          <SocialMedia />
        </div>
        <div className='pt-8'>
          <MenuMain />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
