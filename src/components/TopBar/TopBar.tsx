import React from 'react';
import { RiMailLine, RiPhoneFill } from 'react-icons/ri';

import ArrowLink from '@/components/links/ArrowLink';
import SocialMedia from '@/components/SocialMedia';

const TopBar = () => {
  return (
    <div className='bg-secondary-default px-4 py-4 text-white'>
      <div className='container mx-auto flex justify-between'>
        <div className='relative flex items-end justify-start'>
          <div className='mr-4 flex '>
            <span className='pt-1'>
              <RiPhoneFill className='mr-2 text-lg' />
            </span>
            <ArrowLink href='tel:593999999999'>593 99 999 9999</ArrowLink>
          </div>
          <div className='flex '>
            <span className='pt-1'>
              <RiMailLine className='mr-2 text-lg' />
            </span>
            <ArrowLink href='mailto:info@isteps.edu.ec'>
              info@isteps.edu.ec
            </ArrowLink>
          </div>
        </div>
        <SocialMedia />
      </div>
    </div>
  );
};

export default TopBar;
