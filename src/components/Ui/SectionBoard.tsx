import { ReactNode } from 'react';

interface SectionBoardProps {
  children: ReactNode;
  title?:string;
}

const SectionBoard = ({ children, title }: SectionBoardProps) => {
  return (
    <div className="p-4 rounded-sm bg-white">
      {title && <div>{title}</div>}
      {children}
    </div>
  );
};

export default SectionBoard;
