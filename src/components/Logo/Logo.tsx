import NextImage from '@/components/NextImage';

const Logo = () => {
  return (
    <div>
      <NextImage
        useSkeleton
        className='w-32 md:w-60'
        src='/images/isteps-logo.png'
        width='240'
        height='240'
        alt='Isteps Logo'
      />
    </div>
  );
};

export default Logo;
