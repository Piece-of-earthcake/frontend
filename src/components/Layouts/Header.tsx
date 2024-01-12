import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <>
      <header className="fixed z-50 inset-x-0 flex items-center p-4 h-14 bg-gray-800">
        <h1 className="text-green">Header</h1>
      </header>
    </>
  );
};

export default Header;
