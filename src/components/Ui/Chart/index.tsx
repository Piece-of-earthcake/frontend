import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';

type ChartProps = {
  option: echarts.EChartsOption;
};

const Chart = ({ option }: ChartProps) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current);

      window.onresize = function () {
        chart.resize();
      };

      chart.setOption(option);
    }
  }, [option, chartRef]);

  return (
    <>
      <div className='h-full w-full' ref={chartRef} />
    </>
  );
};

export default Chart;
