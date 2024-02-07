'use client';

import { memo } from 'react';

type ShelterListItemProps = {
  name: string;
  lat: number;
  lng: number;
  capacity: number;
  handleMapClick: (x: { lat: number; lng: number }) => void;
};

const ShelterListItem = ({
  name,
  lat,
  lng,
  capacity,
  handleMapClick
}: ShelterListItemProps) => {
  return (
    <div
      className='text-block min-w-80 cursor-pointer border-t border-solid border-gray-200 px-4 py-4 hover:bg-gray-50'
      onClick={() => handleMapClick({ lat: lat, lng: lng })}
    >
      <div className='text-body4 text-gray-950'>{name}</div>
      <div className='mt-1.5 text-body3-thin text-gray-950'>
        서울시 어쩌고구 무슨동 12길 34
      </div>
      <div className='text-body2-thin text-gray-950'>
        수용가능인원 : {capacity}명
      </div>
    </div>
  );
};

export default memo(ShelterListItem);
