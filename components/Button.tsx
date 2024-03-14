import React from "react";

const Button = ({
  label,
  secondary,
  fullWidth,
  large,
  onClick,
  disabled,
  outline,
}: {
  label: string;
  secondary?: boolean;
  fullWidth?: boolean;
  large?: boolean;
  onClick: () => void;
  disabled?: boolean;
  outline?: boolean;
}) => {
  return (
    <button
      className={`disabled:opacity-70 disabled:cursor-not-allowed rounded-md font-semibold hover:opacity-80 transition border-2 
      ${fullWidth ? "w-full" : "w-fit"}
      ${
        secondary
          ? "bg-white text-black border-black"
          : "bg-purple-300 text-black border-purple-300"
      } 
      ${outline ? "bg-transparent border-white" : ""}
      ${large ? "p-3" : "py-2 px-4"}
      `}
    >
      {label}
    </button>
  );
};

export default Button;
