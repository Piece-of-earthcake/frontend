import Chart from '@/components/Ui/Chart';
import { REGION_RANKING_CHART_OPTION } from '@/components/Ui/Chart/options';
import SectionBoard from '@/components/Ui/SectionBoard';

const EarthquakeRegionRanking = () => {
  const title = '2023 지진 빈도수 Top 5';
  return (
    <SectionBoard title={title}>
      <div className='mx-auto h-[400px] w-full'>
        <Chart option={REGION_RANKING_CHART_OPTION} />
      </div>
    </SectionBoard>
  );
};

export default EarthquakeRegionRanking;
