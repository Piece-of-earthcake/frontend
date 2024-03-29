'use client';

import { useJsApiLoader } from '@react-google-maps/api';
import { useEffect } from 'react';

import AnimationSkeleton from '@/components/Ui/AnimationSkeleton';
import useGoogleMapStore from '@/hooks/store/useGoogleMapStore';

import GoogleMap from '../GoogleMap';

const seoul = { lat: 37.5665, lng: 126.978 };

const MapView = () => {
  const malls = [
    {
      label: 'C',
      name: '코엑스몰',
      lat: 37.5115557,
      lng: 127.0595261,
      content: '<b>코엑스몰</b>'
    },
    {
      label: 'G',
      name: '고투몰',
      lat: 37.5062379,
      lng: 127.0050378,
      content: '<b>고투몰</b>'
    },
    {
      label: 'D',
      name: '동대문시장',
      lat: 37.566596,
      lng: 127.007702,
      content: '<b>동대문시장</b>' + '<div>test 하는거여</div>'
    },
    {
      label: 'I',
      name: 'IFC몰',
      lat: 37.5251644,
      lng: 126.9255491,
      content: '<b>IFC몰</b>'
    },
    {
      label: 'L',
      name: '롯데월드타워몰',
      lat: 37.5125585,
      lng: 127.1025353,
      content: '<b>롯데월드타워몰</b>'
    },
    {
      label: 'M',
      name: '명동지하상가',
      lat: 37.563692,
      lng: 126.9822107,
      content: '<b>명동지하상가</b>'
    },
    {
      label: 'T',
      name: '타임스퀘어',
      lat: 37.5173108,
      lng: 126.9033793,
      content: '<b>타임스퀘어</b>'
    }
  ];

  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY || '';
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey
  });

  const { map } = useGoogleMapStore();

  const initMap = () => {
    malls.forEach(({ label, lat, lng, content }) => {
      const marker = new google.maps.Marker({
        position: { lat, lng },
        label,
        map
      });

      const infoWindow = new google.maps.InfoWindow({
        content: content,
        ariaLabel: 'seoul'
      });

      marker.addListener('click', () => {
        infoWindow.open({
          anchor: marker,
          map
        });
      });
    });
  };

  useEffect(() => {
    if (!isLoaded) return;
    initMap();
  }, [isLoaded]);

  return (
    <>
      {isLoaded ? (
        <GoogleMap
          mapStyle='mb-4 h-[400px] w-full'
          mapOption={{
            zoom: 12,
            center: seoul
          }}
          mapId='earthQuakeMap'
        />
      ) : (
        <AnimationSkeleton height='400px' width='100%' />
      )}
    </>
  );
};
export default MapView;
