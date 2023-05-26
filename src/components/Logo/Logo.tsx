import { FaLaptopCode } from 'react-icons/fa';
const Logo = () => {
  return (
    <div className='flex items-center justify-center gap-x-4 font-display'>
      <div className=''>
        <FaLaptopCode className='text-7xl text-primary-100' />
      </div>
      <div className='w-[260px]'>
        <span className='text-3xl text-primary-300'>Israel Herrera</span>
        <br />
        <span className='text-xl text-secondary-500'>
          Fullstack Developer JS / TS
        </span>
      </div>
    </div>
  );
};

export default Logo;
