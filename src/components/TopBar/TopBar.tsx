import React from 'react';

import SocialMedia from '@/components/SocialMedia';

const TopBar = () => {
  return (
    <div className='bg-primary-950 px-4 py-4 text-white'>
      <div className='container mx-auto flex justify-between'>
        <div className='relative flex items-end justify-start'>
          <div className='flex'>
            {/* <span className='pt-1'>
              <RiMailLine className='mr-2 text-lg text-secondary-500' />
            </span>
            <ArrowLink href='mailto:israelherrerae@gmail.com'>
              israelherrerae@gmail.com
            </ArrowLink> */}
          </div>
        </div>
        <SocialMedia />
      </div>
    </div>
  );
};

export default TopBar;
