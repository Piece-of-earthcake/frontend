'use client';
import React, { useEffect, useState } from 'react';

import { MenuId } from './type';

const SideBar = () => {
  const [selectedMenu, setSelectedMenu] = useState<number>();

  const menuItems = [
    {
      label: '최근 발생 한 지진',
      id: MenuId.RecentEarthquakes
    },
    { label: '지진 뉴스', id: MenuId.News },
    {
      label: '지진 발생 추이',
      id: MenuId.Statistics
    }
  ];

  const handleMenuClick = (menuIndex: number) => {
    const sectionId = menuItems[menuIndex].id;
    const section = document.getElementById(sectionId)?.offsetTop;

    setSelectedMenu(menuIndex);

    window.scrollTo({
      top: section,
      behavior: 'smooth'
    });
  };

  // TODO : 각 컴포넌트 완료 후 테스트 필요
  const handleScroll = () => {
    const scrollPosition = window.scrollY + 350;

    menuItems.forEach((menuItem, index) => {
      const sectionId = menuItem.id;
      const section = document.getElementById(sectionId);

      if (section) {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
          setSelectedMenu(index);
        }
      }
    });
  };

  useEffect(() => {
    const handleInitialScroll = () => {
      handleScroll();
    };

    window.addEventListener('scroll', handleScroll);

    handleInitialScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [menuItems]);

  return (
    <React.Fragment>
      <aside>
        <div className='fixed z-49 top-14 inset-0 w-60 min-h-screen p-4 bg-white'>
          <ul className='grid gap-y-6 text-gray-300 text-body3 mb-10 cursor-pointer'>
            {menuItems.map((menuItem, index) => (
              <li
                key={menuItem.id}
                className={`hover:text-yellow-400 ${
                  selectedMenu === index
                    ? 'text-yellow-400 text-body3-bold'
                    : ''
                }`}
                onClick={() => handleMenuClick(index)}
              >
                {menuItem.label}
              </li>
            ))}
          </ul>

          <div className='flex flex-col items-center justify-center rounded-md border-2 border-yellow-400 p-2 text-black'>
            <p className='text-body2'>2024 국내 지진 발생 횟수</p>
            <p className='text-title'>333</p>
            <p className='text-body1-thin'>+ 12(전년대비)</p>
          </div>
        </div>
      </aside>
    </React.Fragment>
  );
};

export default SideBar;
