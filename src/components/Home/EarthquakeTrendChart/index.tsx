'use client';

import Image from 'next/image';
import { useState } from 'react';

import SectionBoard from '@/components/Ui/SectionBoard';
import Select from '@/components/Ui/Select';

import Chart from './Chart';
import { SELECT_FILTER } from './constants/index';

const EarthquakeTrendChart = () => {
  const [selected, setSelected] = useState(SELECT_FILTER[0].label);

  return (
    <SectionBoard>
      <div className='h-[1000px] text-black'>
        <div className='flex justify-between text-title'>
          <p>한국 지진 발생 추이</p>
          <Select
            options={SELECT_FILTER}
            setSelected={setSelected}
            selected={selected}
          />
        </div>

        <div className='mt-11 flex justify-around'>
          <div className='flex flex-col items-center justify-center rounded-md border border-[#D8D8D8] px-16 py-6 shadow-lg'>
            <Image
              src={'/icons/icon_earthquake_graph.png'}
              alt='icon_graph'
              width='28'
              height='28'
            />
            <p className='text-caption1'>72회</p>
            <p className='text-body3'>규모 3.0 이상</p>
          </div>
          <div className='flex flex-col items-center justify-center rounded-md border border-[#D8D8D8] px-16 py-6 shadow-lg'>
            <Image
              src={'/icons/icon_earthquake_graph.png'}
              alt='icon_graph'
              width='28'
              height='28'
            />
            <p className='text-caption1'>60회</p>
            <p className='text-body3'>규모 3.0 ~ 4.0</p>
          </div>
          <div className='flex flex-col items-center justify-center rounded-md border border-[#D8D8D8] px-16 py-6 shadow-lg'>
            <Image
              src={'/icons/icon_earthquake_graph.png'}
              alt='icon_graph'
              width='28'
              height='28'
            />
            <p className='text-caption1'>48회</p>
            <p className='text-body3'>규모 4.0 ~ 5.0</p>
          </div>
          <div className='flex flex-col items-center justify-center rounded-md border border-[#D8D8D8] px-16 py-6 shadow-lg'>
            <Image
              src={'/icons/icon_earthquake_graph.png'}
              alt='icon_graph'
              width='28'
              height='28'
            />
            <p className='text-caption1'>20회</p>
            <p className='text-body3'>규모 5.0 이상</p>
          </div>
        </div>

        <Chart />
      </div>
    </SectionBoard>
  );
};

export default EarthquakeTrendChart;
