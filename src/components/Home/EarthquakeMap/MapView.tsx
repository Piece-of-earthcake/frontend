'use client';

import { useJsApiLoader } from '@react-google-maps/api';
import Script from 'next/script';
import { useEffect, useRef, useState } from 'react';
const MapView = () => {
  // const [mapData, setMap] = useState<google.maps.Map | undefined>();
  const [map, setMap] = useState<google.maps.Map | undefined>();
  const mapRef = useRef(null);
  // const malls = [
  //   { label: 'C', name: '코엑스몰', lat: 37.5115557, lng: 127.0595261 },
  //   { label: 'G', name: '고투몰', lat: 37.5062379, lng: 127.0050378 },
  //   { label: 'D', name: '동대문시장', lat: 37.566596, lng: 127.007702 },
  //   { label: 'I', name: 'IFC몰', lat: 37.5251644, lng: 126.9255491 },
  //   { label: 'L', name: '롯데월드타워몰', lat: 37.5125585, lng: 127.1025353 },
  //   { label: 'M', name: '명동지하상가', lat: 37.563692, lng: 126.9822107 },
  //   { label: 'T', name: '타임스퀘어', lat: 37.5173108, lng: 126.9033793 }
  // ];
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY || '';
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey
  });

  const initMap = () => {
    const seoul = { lat: 37.5665, lng: 126.978 };
    const map = new google.maps.Map(
      document.getElementById('earthQuakeMap') as HTMLElement,
      {
        zoom: 8,
        center: seoul
      }
    );
    const contentString =
      '<div>경북 경주시 동남동쪽 19km 지역</div>' +
      '<div>2023.11.30 04.55 발생</div>' +
      '<div>최대진도 V (경북), IV (울산), III (경남,부산), II (대구,강원)참고사항위의 정보는 2023년 11월 30일 4시 55분에 발표한 지진속보를 수동으로 분석한 상세정보임.향후, 여진 등에 대한 정보를 참고하시기바람.지진 발생 인근 지역은 지진동을 느낄 수 있음. 안전에 유의하기 바람.</div>' +
      '<b>진도 3.3</b>';
    const infoWindow = new google.maps.InfoWindow({
      content: contentString,
      ariaLabel: 'seoul'
    });
    const marker = new google.maps.Marker({
      position: seoul,
      map,
      title: 'seoul (Ayers Rock)'
    });

    marker.addListener('click', () => {
      infoWindow.open({
        anchor: marker,
        map
      });
    });
  };
  useEffect(() => {
    if (!isLoaded) return;
    initMap();
  }, [isLoaded]);

  return (
    <>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY}&loading=async`}
      />
      <div id='earthQuakeMap' ref={mapRef} className='mb-4 h-[400px] w-full' />
    </>
  );
};
export default MapView;
