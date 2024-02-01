'use client';

import { useState } from 'react';
import Image from 'next/image';

import Chart from './Chart'
import Select from '@/components/Ui/Select';


const EarthquakeTrendChart = () => {
  const [selected, setSelected] = useState('1년');
  const SelectFilter = [
    { value: '1', label: '1년' },
    { value: '3', label: '3년' },
    { value: '5', label: '5년' },
    { value: '10', label: '10년' }
  ];
  return (
    <>
      <div className="bg-white p-4 h-[1000px] rounded text-black">
        <div className="flex justify-between text-title">
          <p>한국 지진 발생 추이</p>
          <Select
            options={SelectFilter}
            setSelected={setSelected}
            selected={selected}
          />
        </div>

        <div className="h-[45px]" />

        <div className="flex justify-around">
          <div className="shadow-lg py-6 px-16 flex flex-col border border-[#D8D8D8] rounded-md justify-center items-center">
            <Image src={'/icons/icon_earthquake_graph.png'} alt="icon_graph" width="28" height="28" />
            <p className="text-caption1">72회</p>
            <p className="text-body3">규모 3.0 이상</p>
          </div>
          <div className="shadow-lg py-6 px-16 flex flex-col border border-[#D8D8D8] rounded-md justify-center items-center">
            <Image src={'/icons/icon_earthquake_graph.png'} alt="icon_graph" width="28" height="28" />
            <p className="text-caption1">60회</p>
            <p className="text-body3">규모 3.0 ~ 4.0</p>
          </div>
          <div className="shadow-lg py-6 px-16 flex flex-col border border-[#D8D8D8] rounded-md justify-center items-center">
            <Image src={'/icons/icon_earthquake_graph.png'} alt="icon_graph" width="28" height="28" />
            <p className="text-caption1">48회</p>
            <p className="text-body3">규모 4.0 ~ 5.0</p>
          </div>
          <div className="shadow-lg py-6 px-16 flex flex-col border border-[#D8D8D8] rounded-md justify-center items-center">
            <Image src={'/icons/icon_earthquake_graph.png'} alt="icon_graph" width="28" height="28" />
            <p className="text-caption1">20회</p>
            <p className="text-body3">규모 5.0 이상</p>
          </div>
        </div>

        <Chart/>
      </div>
    </>
  );
};

export default EarthquakeTrendChart;
