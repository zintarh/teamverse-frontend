interface ButtonProps {
  onClick: () => void;
  label: string;
  disabled?: boolean;
}

const Button = ({ onClick, label, disabled = false }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full py-2  rounded-md text-sm transition ${
        disabled
          ? 'bg-[#1f1f1f] cursor-not-allowed'
          : 'bg-[#2a2a2a] hover:bg-[#2a2a2a] cursor-pointer'
      } text-white`}
    >
      {label}
    </button>
  );
};

export default Button;

