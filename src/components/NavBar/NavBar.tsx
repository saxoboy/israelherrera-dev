import Logo from '@/components/Logo';
import MenuMain from '@/components/MenuMain';

const NavBar = () => {
  return (
    <header className='p-4'>
      <div className='container mx-auto flex items-center justify-between px-4'>
        <Logo />
        <div className='hidden lg:block'>
          <MenuMain />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
