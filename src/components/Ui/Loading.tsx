import clsx from 'clsx';

const Loading = () => {
  return (
    <div className='mx-auto w-full text-center'>
      <div
        className={clsx(
          'h-full w-full animate-spin rounded-full border-4 border-solid border-gray-100 border-t-yellow-500'
        )}
      />
    </div>
  );
};

export default Loading;
