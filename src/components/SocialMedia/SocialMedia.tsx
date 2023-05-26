import Link from 'next/link';
import {
  RiFileUserFill,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiMailSendFill,
  RiTwitterFill,
} from 'react-icons/ri';

const SocialMedia = () => {
  return (
    <div className='flex items-center justify-end gap-3'>
      <Link
        href='https://www.linkedin.com/in/israelherrerae'
        target='_blank'
        title='CV - Resume'
      >
        <RiFileUserFill className='text-2xl text-secondary-500 transition duration-150 ease-in-out hover:scale-125 hover:text-primary-300' />
      </Link>
      <Link
        href='https://www.linkedin.com/in/israelherrerae'
        target='_blank'
        title='Israel Herrera in Linkedin'
      >
        <RiLinkedinBoxFill className='text-2xl text-secondary-500 transition duration-150 ease-in-out hover:scale-125 hover:text-primary-300' />
      </Link>
      <Link
        href='https://github.com/saxoboy'
        target='_blank'
        title='Israel Herrera in Github'
      >
        <RiGithubFill className='text-2xl text-secondary-500 transition duration-150 ease-in-out hover:scale-125 hover:text-primary-300' />
      </Link>
      <Link
        href='https://twitter.com/saxoboy'
        target='_blank'
        title='Israel Herrera in Twitter'
      >
        <RiTwitterFill className='text-2xl text-secondary-500 transition duration-150 ease-in-out hover:scale-125 hover:text-primary-300' />
      </Link>
      <Link href='mailto:israelherrerae@gmail.com' target='_blank'>
        <RiMailSendFill className='text-2xl text-secondary-500 transition duration-150 ease-in-out hover:scale-125 hover:text-primary-300' />
      </Link>
    </div>
  );
};

export default SocialMedia;
