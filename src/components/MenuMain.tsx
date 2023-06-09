import UnderlineLink from '@/components/links/UnderlineLink';

const MenuMain = () => {
  return (
    <nav>
      <ul className='flex flex-col items-center justify-center text-center font-display text-xl tracking-wide text-secondary-500 lg:flex-row'>
        <li className='px-4 py-2'>
          <UnderlineLink href='/#home'>home</UnderlineLink>
        </li>
        <li className='px-4 py-2'>
          <UnderlineLink href='/#about-me'>About me</UnderlineLink>
        </li>
        <li className='px-4 py-2'>
          <UnderlineLink href='/'>Projects</UnderlineLink>
        </li>
        <li className='px-4 py-2'>
          <UnderlineLink href='/'>Contact</UnderlineLink>
        </li>
        <li className='px-4 py-2'>
          <UnderlineLink href='/es'>Español</UnderlineLink>
        </li>
      </ul>
    </nav>
  );
};

export default MenuMain;
