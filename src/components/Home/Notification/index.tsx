'use client';

import clsx from 'clsx';
import { useEffect, useState } from 'react';

import Scales from './Scales';

// import { EventSourcePolyfill, NativeEventSource } from 'event-source-polyfill';

const notificationData = {
  region: '경상북도 경주 동남쪽 19km 지역',
  scale: 2.3,
  time: '2023.11.30 04:55 발생'
};

const Notification = () => {
  const [test, setTest] = useState(false);
  const [animationClass, setAnimationClass] = useState('');

  // TODO : sse 실시간알림 실제 서버 연결작업 예정

  // useEffect(() => {
  //   const EventSource = EventSourcePolyfill || NativeEventSource;
  //   const eventSource = new EventSource('/api/sse-api', {
  //     headers: {
  //       Authorization: `Bearer ${'accessToken'}`,
  //       Connetction: 'keep-alive',
  //       Accept: 'text/event-stream'
  //     },
  //     heartbeatTimeout: 86400000
  //   });

  //   // 이벤트 핸들러
  //   eventSource.addEventListener('message', (event) => {
  //     const data = JSON.parse(event.data);
  //     console.log('Received SSE:', data);
  //   });

  //   eventSource.addEventListener('error', (error) => {
  //     console.error('SSE Error:', error);
  //   });

  //   return () => {
  //     eventSource.close();
  //   };
  // }, []);

  return (
    <div>
      {test && (
        <div className={clsx('flex w-full gap-8', animationClass)}>
          <div className='relative w-[calc(100vw-144px)]'>
            <div className='flex items-center rounded-md bg-white pb-7 pt-6 text-gray-950'>
              <h1 className='px-16 text-title-bold'>실시간 알림</h1>
              <div className='flex gap-9'>
                <div className='flex gap-1'>
                  <div className='text-body3-bold'>지역 : </div>
                  <div>{notificationData.region}</div>
                </div>

                <div className='flex gap-1'>
                  <div className='text-body3-bold'>규모 : </div>
                  <div>{notificationData.scale}</div>
                </div>

                <div className='flex gap-1'>
                  <div className='text-body3-bold'>시간 : </div>
                  <div>{notificationData.time}</div>
                </div>
              </div>
            </div>
            <div className='absolute bottom-0 h-2 w-full rounded-b-md bg-yellow-400'></div>
          </div>
          <Scales data={notificationData.scale} />
        </div>
      )}
      <button
        className='absolute rounded-sm bg-yellow-300 px-6 py-1 text-black'
        onClick={() => {
          if (test) {
            setAnimationClass('animate-slideOutRight');

            setTimeout(() => {
              setTest(false);
            }, 500);
          } else {
            setAnimationClass('animate-slideInRight');
            setTest(true);
          }
        }}
      >
        실시간알림 테스트 버튼
      </button>
    </div>
  );
};

export default Notification;
