'use client';

import clsx from 'clsx';
import { useEffect } from 'react';

import Loading from '@/components/Ui/Loading';

type MapViewProps = {
  map: google.maps.Map | undefined;
  sideBarOpen: boolean;
  findLocationLoading: boolean;
  setMap: (x: google.maps.Map) => void;
  handleFindLocation: (map: google.maps.Map) => void;
};

const MapView = ({
  map,
  sideBarOpen,
  findLocationLoading,
  setMap,
  handleFindLocation
}: MapViewProps) => {
  useEffect(() => {
    const initMap = () => {
      const map = new window.google.maps.Map(
        document.getElementById('map') as HTMLElement,
        {
          zoom: 14,
          disableDefaultUI: true,
          center: { lat: 37.5546788, lng: 126.97060691 },
          zoomControl: true
        }
      );

      setMap(map);
    };

    initMap();
  }, []);

  return (
    <div className='flex justify-end'>
      <div
        className={clsx(
          sideBarOpen
            ? 'w-[calc(100%-400px)] animate-mapClose'
            : 'w-full animate-mapOpen',
          'relative'
        )}
      >
        {/* TODO : 버튼 애니메이션 적용 안돼도록수정필요 */}
        <button
          className='absolute left-1/2 top-9 z-10 -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-yellow-400 px-6 py-2 text-body2-bold text-white shadow-lg'
          onClick={() => handleFindLocation(map as google.maps.Map)}
        >
          {findLocationLoading ? (
            <div className='flex h-6 w-6'>
              <Loading />
            </div>
          ) : (
            '내 주변 대피소 찾기'
          )}
        </button>
        <div id='map' className='h-[600px] w-full' />
      </div>

      <script
        async
        defer
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY}&loading=async`}
        type='text/javascript'
      />
    </div>
  );
};

export default MapView;
