import EarthquakeMap from '@/components/Home/EarthquakeMap';
import EarthquakeNews from '@/components/Home/EarthquakeNews';
import EarthquakeRegionRanking from '@/components/Home/EarthquakeRegionRanking';
import EarthquakeTrendChart from '@/components/Home/EarthquakeTrendChart';
import Notification from '@/components/Home/Notification';
import ShelterFinder from '@/components/Home/ShelterFinder';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <div className="flex flex-col gap-10">
        <div id="recentEarthquakesSection" className="grid grid-cols-1 gap-10">
          <Notification />
          <EarthquakeMap />
        </div>

        <div id="newsSection" className="grid grid-cols-2 gap-4">
          <EarthquakeNews />
          <EarthquakeRegionRanking />
        </div>

        <ShelterFinder />

        <div id="statisticsSection">
          <EarthquakeTrendChart />
        </div>
      </div>
    </>
  );
};

export default Home;
