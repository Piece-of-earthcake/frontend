'use client';

import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';

type ChartProps = {
  option: echarts.EChartsOption;
};

const Chart = ({ option }: ChartProps) => {
  const chartRef = useRef(null);

  useEffect(() => {
    let chartInstance: any;

    const initializeChart = () => {
      if (chartRef.current) {
        chartInstance = echarts.init(chartRef.current);
        chartInstance.setOption(option);

        // 창 크기 변경에 대한 이벤트 리스너 등록
        window.addEventListener('resize', resizeChart);
      }
    };

    const resizeChart = () => {
      if (chartInstance) {
        chartInstance.resize();
      }
    };

    initializeChart();

    // 컴포넌트가 언마운트될 때 이벤트 리스너 해제
    return () => {
      if (chartInstance) {
        window.removeEventListener('resize', resizeChart);
        chartInstance.dispose();
      }
    };
  }, [option, chartRef]);

  return <div className='h-full w-full' ref={chartRef} />;
};

export default Chart;
