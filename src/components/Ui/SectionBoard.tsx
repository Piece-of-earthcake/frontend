import { ReactNode } from 'react';

interface SectionBoardProps {
  children: ReactNode;
  title?: string;
}

const SectionBoard = ({ children, title }: SectionBoardProps) => {
  return (
    <div className='rounded-sm bg-white p-4'>
      {title && <div>{title}</div>}
      {children}
    </div>
  );
};

export default SectionBoard;
