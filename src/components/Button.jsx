import React from "react";

const Button = ({ text, className = "",onClick }) => {
  const baseStyles =
    "font-semibold text-[#1e293b] bg-white w-40 h-10  rounded-md text-xl transition duration-200 border-2 border-transparent hover:bg-[#1e293b] hover:text-white hover:border-white hover:border-solid active:scale-95";
  return (    
      <button onClick={onClick} className={`${baseStyles} ${className}` } >
        {text}
      </button>
  );
};

export default Button;
