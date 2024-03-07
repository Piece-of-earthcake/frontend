import SectionBoard from '@/components/Ui/SectionBoard';

import AlertBox from './AlertBox';
import MapView from './MapView';

const EarthquakeMap = () => {
  return (
    <SectionBoard>
      <MapView />
      <AlertBox />
    </SectionBoard>
  );
};

export default EarthquakeMap;
