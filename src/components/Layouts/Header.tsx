import Link from 'next/link';
import React from 'react';

import FindShelterButton from '../Home/ShelterFinder/FindShelterButton';

const Header = () => {
  return (
    <>
      <header className='fixed inset-x-0 z-50 flex h-14 items-center justify-between bg-white p-4 pr-5 shadow-xl'>
        <Link href='/' className='text-3xl font-bold text-yellow-400'>
          EarthCake
        </Link>
        <FindShelterButton />
      </header>
    </>
  );
};

export default Header;
