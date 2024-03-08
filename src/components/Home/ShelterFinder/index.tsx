'use client';

import Close from '@public/icons/close.svg';
import MenuIcon from '@public/icons/menu_icon.svg';
import Search from '@public/icons/search.svg';
import clsx from 'clsx';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';

import Empty from '@/components/Ui/Empty';
import SectionBoard from '@/components/Ui/SectionBoard';
import useGoogleMapStore from '@/hooks/store/useGoogleMapStore';

import MapView from './MapView';
import ShelterListItem from './ShelterListItem';

interface TemporaryDataType {
  size: number;
  shelter: {
    lat: number;
    long: number;
    name: string;
    capacity: number;
  }[];
}

const temporaryData = {
  size: 4,
  shelter: [
    { lat: 37.5546788, long: 126.97060691, name: '서울역', capacity: 4 },
    { lat: 37.566826, long: 126.9786567, name: '서울특별시청', capacity: 6 },
    { lat: 37.5660373, long: 126.98219301, name: '을지로입구역', capacity: 8 },
    { lat: 37.566826, long: 126.9786567, name: '을지로입구역1', capacity: 6 },
    { lat: 37.5546788, long: 126.97060691, name: '을지로입구역2', capacity: 7 },
    { lat: 37.5655638, long: 126.974894, name: '덕수궁', capacity: 10 }
  ]
};

const ShelterFinder = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [animation, setAnimation] = useState('');
  const [findLocationLoading, setFindLocationLoading] = useState(false);
  const [shelterData, setShelterData] = useState<TemporaryDataType>();
  const [searchInputText, setSearchInputText] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const { map } = useGoogleMapStore();

  useEffect(() => {
    if (!searchValue) return;
    //TODO : https 환경에서 요청해야함으로, https 환경설정후 개발 테스트진행

    const fetchData = async () => {
      try {
        // const base_url =
        //   'https://maps.googleapis.com/maps/api/place/textsearch/json';
        // const params = new URLSearchParams({
        //   query: searchValue,
        //   key: `${process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY}`
        // });
        // const url = `${base_url}?${params.toString()}`;
        // const response = await fetch(url);
        // const data = await response.json();
        // if (data.results && data.results.length > 0) {
        //   const placeInfo = data.results[0];
        //   const pos = {
        //     lat: placeInfo.geometry.location.lat,
        //     lng: placeInfo.geometry.location.lng
        //   };
        //   searchShelter(pos);
        // } else {
        //   console.log('장소를 찾을 수 없습니다.');
        // }
        // const request = {
        //   query: searchValue,
        //   fields: ['name', 'geometry', 'location']
        // };
      } catch (error) {
        console.error(error);
      }
    };
    searchShelter({ lat: 37.5546788, lng: 126.97060691 });
    fetchData();
  }, [searchInputText]);

  const handleFindLocation = (map: google.maps.Map) => {
    if (!map) return;

    setFindLocationLoading(true);
    const infoWindow = new google.maps.InfoWindow();

    const handleLocationError = (
      browserHasGeolocation: boolean,
      infoWindow: google.maps.InfoWindow,
      pos: google.maps.LatLng
    ) => {
      infoWindow.setPosition(pos);
      infoWindow.setContent(
        browserHasGeolocation
          ? 'Error: The Geolocation service failed.'
          : "Error: Your browser doesn't support geolocation."
      );
      infoWindow.open(map);
    };

    const handleGeolocationSuccess = (position: GeolocationPosition) => {
      const pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      const userMarker = createMarker(pos, map);
      addMarkerClickListener(userMarker, pos, infoWindow, map);
      setMapCenterAndOpenSidebar(pos, map);
      searchShelter(pos);
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleGeolocationSuccess, () =>
        handleLocationError(true, infoWindow, map.getCenter()!)
      );
    } else {
      handleLocationError(false, infoWindow, map.getCenter()!);
    }
  };

  const createMarker = (
    position: google.maps.LatLngLiteral,
    map: google.maps.Map
  ) => {
    const marker = new google.maps.Marker({
      position,
      map
    });
    return marker;
  };

  const addMarkerClickListener = (
    marker: google.maps.Marker,
    position: google.maps.LatLngLiteral,
    infoWindow: google.maps.InfoWindow,
    map: google.maps.Map
  ) => {
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.setPosition(position);
      infoWindow.setContent('현재위치');
      infoWindow.open(map);
    });
  };

  const setMapCenterAndOpenSidebar = (
    position: google.maps.LatLngLiteral,
    map: google.maps.Map
  ) => {
    map.setCenter(position);
    setFindLocationLoading(false);
    setAnimation('animate-mapSideBarOpen');
    setSideBarOpen(true);
  };

  const searchShelter = (data: { lat: number; lng: number }) => {
    //TODO : 서버로 부터 대피소 리스트 받아오는 로직 추가 예정
    //TODO : 대피소리스트 초기화 언제 시킬지 고민후 작업 필요

    setShelterData(temporaryData);

    const infoWindow = new google.maps.InfoWindow();

    temporaryData.shelter.forEach(item => {
      const marker = new google.maps.Marker({
        position: { lat: item.lat, lng: item.long },
        map: map
      });

      google.maps.event.addListener(
        marker,
        'click',
        (function (marker, i) {
          return function () {
            infoWindow.setContent(item.name);
            infoWindow.open(map, marker);
          };
        })(marker, item)
      );
    });
  };

  const handleMenuOpen = () => {
    if (sideBarOpen) {
      setAnimation('animate-mapSideBarClose');
      setSideBarOpen(false);
    } else {
      setAnimation('animate-mapSideBarOpen');
      setSideBarOpen(true);
    }
  };

  const handleMapClick = useCallback(
    (data: { lat: number; lng: number }) => {
      if (!map) return;

      map.setCenter(data);
    },
    [map]
  );

  const enterKeyEvent = (e: any) => {
    e.stopPropagation();
    if (e.key === 'Enter') {
      setSearchInputText(searchValue);
    }
  };

  const handleSearch = () => {
    setSearchInputText(searchValue);
  };

  const handleReset = () => {
    setSearchValue('');
    setSearchInputText('');
  };

  const handleChangeSearchText = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  return (
    <SectionBoard id='shelterFinder'>
      <div className='relative'>
        <div className='absolute left-0 top-0 z-10 h-full w-10 bg-white'>
          <button
            className='ml-1 mt-5 h-7 w-7 text-gray-600'
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </button>
        </div>

        {sideBarOpen && (
          <div
            className={clsx(
              animation,
              'absolute left-10 top-0 z-20 h-full w-96 border-r border-solid border-gray-200 bg-white'
            )}
          >
            <div className='ml-1 mt-4 flex h-12 w-[calc(100%-20px)] pr-1'>
              <input
                type='text'
                className='relative h-full w-full rounded-sm border-2 border-solid border-yellow-400 py-1.5 pl-10 pr-3 text-black'
                placeholder='검색어를 입력하세요.'
                value={searchValue}
                onChange={handleChangeSearchText}
                onKeyDown={enterKeyEvent}
              />
              <button
                className='absolute left-3.5 top-7 text-gray-600'
                onClick={handleSearch}
              >
                <Search />
              </button>
              <button
                className='absolute right-8 top-8 h-3.5 w-3.5 text-gray-600'
                onClick={handleReset}
              >
                <Close />
              </button>
            </div>

            <div className='overflow-hidden'>
              <div
                className={clsx(
                  'mt-8 h-[505px] overflow-y-scroll border-b border-solid border-gray-200',
                  shelterData
                    ? 'border-b border-solid border-gray-200'
                    : 'border-none'
                )}
              >
                {shelterData &&
                  shelterData.shelter.map(item => {
                    return (
                      <ShelterListItem
                        key={item.name}
                        name={item.name}
                        lat={item.lat}
                        lng={item.long}
                        capacity={item.capacity}
                        handleMapClick={handleMapClick}
                      />
                    );
                  })}
                {!shelterData && (
                  <Empty
                    iconStyle='h-16 w-16 text-yellow-400 opacity-40'
                    textStyle='body2-bold text-yellow-400 opacity-60'
                    emptyText='데이터가 없습니다.'
                  />
                )}
              </div>
            </div>
          </div>
        )}

        <MapView
          map={map}
          sideBarOpen={sideBarOpen}
          findLocationLoading={findLocationLoading}
          handleFindLocation={handleFindLocation}
        />
      </div>
    </SectionBoard>
  );
};

export default ShelterFinder;
