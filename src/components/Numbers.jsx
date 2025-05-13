import React from "react";

const Numbers = ({ number, className = "" ,onSelect, isSelected }) => {
  const baseStyles = 
    `w-20 h-20 font-bold rounded-md text-3xl transition duration-200  hover:bg-white hover:text-[#1e293b] hover:border-black hover:border-solid  active:scale-95 cursor-pointer  ${isSelected ? 'bg-white text-black border-4 border-black' : 'text-white bg-trasparent border-4 border-white'}  hover:border-black transition`;
  return (
    <button
      onClick={() => onSelect(number)}
      className={`${baseStyles} ${className}`}
    >
      {number}
    </button>
  );
};

export default Numbers;
