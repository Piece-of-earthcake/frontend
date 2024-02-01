'use client';

import { Dispatch, SetStateAction, useState, useEffect } from 'react';

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
    <div className="flex gap-[7px] relative">
      {label && <p className="mt-[7px] text-black body3">{label}</p>}
      <div>
        <div
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="flex h-[48px] w-[156px] cursor-pointer items-center justify-between rounded-md border-[1px] border-[#D8D8D8] p-2 px-2 text-black body-2"
        >
          {selected}
          <div>{isOpen ? <ArrowUp /> : <ArrowDown />}</div>
        </div>

        {isOpen && (
          <div className="bg-white absolute w-[156px] cursor-pointer flex-col rounded-md border-[1px] border-[#D8D8D8] py-[8px] text-black shadow-md body-2">
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
                  <span className="rounded-md flex h-[37px] items-center px-2 hover:bg-[#F3F4F5]">
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
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.75736 5.99552L6 1.81936L10.2426 5.99552"
        stroke="#5F6268"
        stroke-width="1.5"
        stroke-linecap="square"
      />
    </svg>
  );
};

const ArrowDown = () => {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.75736 1.99557L6 6.17173L10.2426 1.99557"
        stroke="#5F6268"
        stroke-width="1.5"
        stroke-linecap="square"
      />
    </svg>
  );
};
export default Select;
