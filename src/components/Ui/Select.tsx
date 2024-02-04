'use client';

import { Dispatch, SetStateAction, useState } from 'react';

import ArrowDown from '../../../public/icons/icon_arrow_down.svg';
import ArrowUp from '../../../public/icons/icon_arrow_up.svg';

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

export default Select;
