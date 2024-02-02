interface ButtonProps {
  content: string;
  handleOnClick: (x: any) => void;
}

const Button = ({ content, handleOnClick }: ButtonProps) => {
  return (
    <button
      className='rounded-md bg-yellow-200 text-white p-2'
      onClick={handleOnClick}
    >
      {content}
    </button>
  );
};

export default Button;
