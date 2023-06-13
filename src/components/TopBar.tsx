import React from 'react';

import SocialMedia from '@/components/SocialMedia';

const TopBar = () => {
  return (
    <div className='bg-primary-50 px-4 py-4 dark:bg-primary-900'>
      <div className='container mx-auto flex justify-center md:justify-end'>
        <SocialMedia />
      </div>
    </div>
  );
};

export default TopBar;
