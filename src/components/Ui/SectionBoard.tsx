import { ReactNode } from 'react';

interface SectionBoardProps {
  children: ReactNode;
  title?: string;
  id?: string;
}

const SectionBoard = ({ children, title, id }: SectionBoardProps) => {
  return (
    <div id={id} className='rounded-sm bg-white p-4'>
      {title && <div className='mb-4 text-title text-black'>{title}</div>}
      {children}
    </div>
  );
};

export default SectionBoard;
