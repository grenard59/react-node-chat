import { ReactNode } from 'react';

type ButtonComponentProps = {
  onClick: () => void;
  icon?: ReactNode;
  label: string | ReactNode;
};

const ButtonComponent = ({ onClick, icon, label }: ButtonComponentProps) => {
  return (
    <button
      type="button"
      onClick={() => onClick()}
      className="text-white bg-gradient-to-br  from-purple-600 to-blue-500 hover:bg-gradient-to-bl hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
      {icon}
      {label}
    </button>
  );
};

export default ButtonComponent;
