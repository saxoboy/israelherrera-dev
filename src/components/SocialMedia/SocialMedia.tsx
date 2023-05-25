import Link from 'next/link';
import { FaTiktok } from 'react-icons/fa';
import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiTwitterFill,
  RiYoutubeFill,
} from 'react-icons/ri';

const SocialMedia = () => {
  return (
    <div className='flex items-center justify-end gap-2'>
      <Link href='https://www.facebook.com/isteps.edu.ec' target='_blank'>
        <RiFacebookCircleFill className='text-2xl text-sanJuan-default hover:text-white' />
      </Link>
      <Link href='https://twitter.com/ISTEPS_ec' target='_blank'>
        <RiTwitterFill className='text-2xl  text-sanJuan-default hover:text-white' />
      </Link>
      <Link href='https://www.instagram.com/isteps.edu.ec' target='_blank'>
        <RiInstagramFill className='text-2xl  text-sanJuan-default hover:text-white' />
      </Link>
      <Link
        href='https://www.youtube.com/channel/UCrPo0JNk8DUvPRDx5UD2bVA'
        target='_blank'
      >
        <RiYoutubeFill className='text-2xl  text-sanJuan-default hover:text-white' />
      </Link>
      <Link href='https://www.tiktok.com/@isteps.edu.ec' target='_blank'>
        <FaTiktok className='text-xl  text-sanJuan-default hover:text-white' />
      </Link>
    </div>
  );
};

export default SocialMedia;
