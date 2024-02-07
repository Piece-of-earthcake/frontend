import EmptyIcon from '@public/icons/empty.svg';
import clsx from 'clsx';

type EmptyProps = {
  iconStyle?: string;
  textStyle?: string;
  emptyText?: string;
};

const Empty = ({ iconStyle, textStyle, emptyText }: EmptyProps) => {
  return (
    <div className='mt-36 flex flex-col items-center justify-center gap-2 pr-10'>
      <div className={clsx(iconStyle || 'h-full w-full')}>
        <EmptyIcon />
      </div>
      {emptyText && (
        <div className={clsx(textStyle || 'text-body2')}>{emptyText}</div>
      )}
    </div>
  );
};

export default Empty;
