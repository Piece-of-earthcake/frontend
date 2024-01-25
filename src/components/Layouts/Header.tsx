import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <>
      <header className="fixed inset-x-0 z-50 flex items-center p-4 h-14 bg-white shadow-xl">
        <Link href="/" className="text-yellow-400 font-bold text-3xl">
          EarthCake
        </Link>
      </header>
    </>
  );
};

export default Header;
