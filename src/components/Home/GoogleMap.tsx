import { useJsApiLoader } from '@react-google-maps/api';
import { useEffect } from 'react';

import useGoogleMapStore from '@/hooks/store/useGoogleMapStore';

type GoogleMapProps = {
  mapStyle?: string;
  mapId: string;
  mapOption: google.maps.MapOptions;
};

const GoogleMap = ({ mapStyle, mapOption, mapId }: GoogleMapProps) => {
  const setMap = useGoogleMapStore(state => state.setMap);
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY || '';
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey
  });

  const initMap = () => {
    const map = new window.google.maps.Map(
      document.getElementById(mapId) as HTMLElement,
      mapOption
    );
    if (setMap) {
      setMap({ map });
    }
  };

  useEffect(() => {
    if (!isLoaded) return;
    initMap();
  }, [isLoaded]);

  if (!isLoaded) return null;

  return <div id={mapId} className={mapStyle} />;
};

export default GoogleMap;
