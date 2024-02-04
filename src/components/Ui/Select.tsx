'use client';

import { Dispatch, SetStateAction, useEffect, useState } from 'react';

// import ArrowUp from '../../../public/icons/icon_arrow_up.svg'
// import ArrowDown from '../../../public/icons/icon_arrow_down.svg'

interface CategoryType {
  label: string;
  value: string;
}
interface Props {
  label?: string;
  options: CategoryType[];
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}

const Select = ({ label, options, selected, setSelected }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='relative flex gap-2'>
      {label && <p className='body3 mt-2 text-black'>{label}</p>}
      <div>
        <div
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className='body-2 flex h-12 w-40 cursor-pointer items-center justify-between rounded-md border border-[#D8D8D8] p-2 px-2 text-black'
        >
          {selected}
          <div>{isOpen ? <ArrowUp /> : <ArrowDown />}</div>
        </div>

        {isOpen && (
          <div className='body-2 absolute w-40 cursor-pointer flex-col rounded-md border border-[#D8D8D8] bg-white py-[8px] text-black shadow-md'>
            {options.map(({ label, value }) => {
              return (
                <div
                  key={label}
                  className={`rounded-md
                  ${selected === label ? 'bg-[#F3F4F5]' : 'bg-white'}
                    `}
                  onClick={() => {
                    setIsOpen(!isOpen);
                    setSelected(label);
                  }}
                >
                  <span className='flex h-9 items-center rounded-md px-2 hover:bg-[#F3F4F5]'>
                    {label}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

const ArrowUp = () => {
  return (
    <svg
      width='12'
      height='8'
      viewBox='0 0 12 8'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M1.75736 5.99552L6 1.81936L10.2426 5.99552'
        stroke='#5F6268'
        strokeWidth='1.5'
        strokeLinecap='square'
      />
    </svg>
  );
};

const ArrowDown = () => {
  return (
    <svg
      width='12'
      height='8'
      viewBox='0 0 12 8'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M1.75736 1.99557L6 6.17173L10.2426 1.99557'
        stroke='#5F6268'
        strokeWidth='1.5'
        strokeLinecap='square'
      />
    </svg>
  );
};

export default Select;
