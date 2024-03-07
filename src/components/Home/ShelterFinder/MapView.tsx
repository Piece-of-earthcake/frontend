'use client';

import { useJsApiLoader } from '@react-google-maps/api';
import clsx from 'clsx';

import AnimationSkeleton from '@/components/Ui/AnimationSkeleton';
import Loading from '@/components/Ui/Loading';

import GoogleMap from '../GoogleMap';

type MapViewProps = {
  map: google.maps.Map | undefined;
  sideBarOpen: boolean;
  findLocationLoading: boolean;
  handleFindLocation: (map: google.maps.Map) => void;
};

const MapView = ({
  map,
  sideBarOpen,
  findLocationLoading,
  handleFindLocation
}: MapViewProps) => {
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY || '';
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey
  });

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
        {isLoaded ? (
          <GoogleMap
            mapStyle='h-[600px] w-full'
            mapOption={{
              zoom: 14,
              disableDefaultUI: true,
              center: { lat: 37.5546788, lng: 126.97060691 },
              zoomControl: true
            }}
            mapId='shelterFinderMap'
          />
        ) : (
          <AnimationSkeleton height='600px' width='100%' />
        )}
      </div>
    </div>
  );
};

export default MapView;
