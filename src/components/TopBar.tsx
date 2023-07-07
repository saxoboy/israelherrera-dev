import React from 'react';

import SocialMedia from '@/components/SocialMedia';

const TopBar = () => {
  return (
    <div className='bg-primary-900 px-4 py-4'>
      <div className='container mx-auto flex justify-center md:justify-end'>
        <SocialMedia />
      </div>
    </div>
  );
};

export default TopBar;
