"use client";
import { CustomButtonProps } from "@/types";
import Image from "next/image";

const CustomButton = ({ handleClick, label, containerStyles, icon }: CustomButtonProps) => {
  return (
    <button 
    onClick={handleClick} 
    className={`flex justify-evenly items-center hover:bg-zinc-700 active:bg-zinc-800 
      py-2 rounded-full px-3 border border-gray-300 | ${containerStyles}`}>
      <Image
        src={icon}
        alt={label}
        width={25}
        height={25}
        className="object-contain"
      />
      <span className="font-medium text-[14px]">{label}</span>
    </button>
  );
};

export default CustomButton;
