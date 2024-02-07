'use client';

import Image from 'next/image';
import { useState } from 'react';

import Chart from '@/components/Ui/Chart';
import SectionBoard from '@/components/Ui/SectionBoard';
import Select from '@/components/Ui/Select';
import { ChartOptions } from '@/constants/index';

const EarthquakeTrendChart = () => {
  const [selected, setSelected] = useState(ChartOptions.SELECT_FILTER[0].label);

  return (
    <SectionBoard>
      <div className='h-full text-black'>
        <div className='flex justify-between text-title'>
          <p>한국 지진 발생 추이</p>
          <Select
            options={ChartOptions.SELECT_FILTER}
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

        <div className='mt-10 h-[600px] w-full'>
          <Chart option={ChartOptions.SCALE_CHART_OPTIONS} />
        </div>
      </div>
    </SectionBoard>
  );
};

export default EarthquakeTrendChart;
