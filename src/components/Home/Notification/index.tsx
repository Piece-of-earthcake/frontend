'use client';

import { useEffect, useState } from 'react';
import Scales from './Scales';
import clsx from 'clsx';

// import { EventSourcePolyfill, NativeEventSource } from 'event-source-polyfill';

const notificationData = {
  region: '경상북도 경주 동남쪽 19km 지역',
  scale: 2.3,
  time: '2023.11.30 04:55 발생'
};

const Notification = () => {
  const [test, setTest] = useState(false);
  const [animationClass, setAnimationClass] = useState('');

  // useEffect(() => {
  //   // SSE 연결
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
          <div className="relative w-[calc(100vw-144px)]">
            <div className="bg-white pt-6 pb-7 rounded-md text-gray-950 flex items-center">
              <h1 className="text-title-bold px-16 ">실시간 알림</h1>
              <div className="flex gap-9">
                <div className="flex gap-1">
                  <div className="text-body3-bold">지역 : </div>
                  <div>{notificationData.region}</div>
                </div>

                <div className="flex gap-1">
                  <div className="text-body3-bold">규모 : </div>
                  <div>{notificationData.scale}</div>
                </div>

                <div className="flex gap-1">
                  <div className="text-body3-bold">시간 : </div>
                  <div>{notificationData.time}</div>
                </div>
              </div>
            </div>
            <div className=" rounded-b-md bg-yellow-400 absolute bottom-0 w-full h-2"></div>
          </div>
          <Scales data={notificationData.scale} />
        </div>
      )}
      <button
        className="text-black bg-yellow-300 absolute py-1 px-6 rounded-sm"
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
