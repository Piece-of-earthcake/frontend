import clsx from 'clsx';
import type { FC } from 'react';

export interface AnimationSkeletonProps {
  borderRadius?: string;
  height?: string;
  width?: string;
}

const AnimationSkeleton: FC<AnimationSkeletonProps> = ({
  borderRadius,
  height,
  width
}) => {
  return (
    <div
      className={clsx(
        'animate-skeletonLoading bg-gradient bg-200 min-h-5 min-w-10'
      )}
      style={{
        borderRadius: borderRadius || '5px',
        height: height || 'null',
        width: width || '100%'
      }}
    />
  );
};

export default AnimationSkeleton;
