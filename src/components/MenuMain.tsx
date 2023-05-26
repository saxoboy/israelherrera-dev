import UnderlineLink from '@/components/links/UnderlineLink';

const MenuMain = () => {
  return (
    <nav>
      <ul className='flex items-center justify-center text-center font-display text-xl tracking-wide text-secondary-500'>
        <li className='px-4 py-2'>
          <UnderlineLink href='/'>Home</UnderlineLink>
        </li>
        <li className='px-4 py-2'>
          <UnderlineLink href='/'>About me</UnderlineLink>
        </li>
        <li className='px-4 py-2'>
          <UnderlineLink href='/'>Projects</UnderlineLink>
        </li>
        <li className='px-4 py-2'>
          <UnderlineLink href='/'>Contact</UnderlineLink>
        </li>
        <li className='px-4 py-2'>
          <UnderlineLink href='/'>Español</UnderlineLink>
        </li>
      </ul>
    </nav>
  );
};

export default MenuMain;
