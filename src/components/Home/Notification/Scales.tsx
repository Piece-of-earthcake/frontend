'use client';
import clsx from 'clsx';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const earthquakeStage = (data: number) => {
  switch (data) {
    case 5:
      return 'rotate-m-80';
    case 4:
      return 'rotate-m-45';
    case 3:
      return 'rotate-0';
    case 2:
      return 'rotate-45';
    case 1:
      return 'rotate-80';
    default:
      return 'rotate-m-80';
  }
};

const Scales = ({ data }: { data: number }) => {
  const [rotationClass, setRotationClass] = useState<string>('rotate-m-80');

  useEffect(() => {
    if (data) {
      setTimeout(() => {
        const result = earthquakeStage(Math.floor(data));
        setRotationClass(result);
      }, 500);
    } else {
      setRotationClass('rotate-m-80');
    }
  }, [data]);

  return (
    <>
      <div className="relative min-w-48 h-20 mr-2 animation-bottom-up">
        <Image
          alt="scales"
          className={clsx(
            'object-cover object-center z-10 absolute bottom-1 left-22 transform w-4 h-16 transition-transform duration-500 origin-bottom',
            rotationClass
          )}
          priority
          width={60}
          height={80}
          src="/scales_needie.png"
        />
        <Image alt="scales" priority src="/scales.png" sizes="100%" fill />
      </div>
    </>
  );
};

export default Scales;
