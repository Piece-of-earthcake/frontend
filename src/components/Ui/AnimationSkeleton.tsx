import clsx from 'clsx';

export interface AnimationSkeletonProps {
  borderRadius?: string;
  height?: string;
  width?: string;
}

const AnimationSkeleton = ({
  borderRadius,
  height,
  width
}: AnimationSkeletonProps) => {
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
