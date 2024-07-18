"use client";

// components/ColorCard.tsx
import React from "react";
import CustomButton from "./CustomButton";
import { filecopy } from "@/public";

interface ColorCardProps {
  name: string;
  hex: string;
  rgb: string;
}

const ColorCard = ({ name, hex, rgb }: ColorCardProps) => {
  
  // clipboard
  const copyHexToClipboard = () => {
    navigator.clipboard.writeText(`#${hex}`).then(
      () => {
        alert("Hex code copied to clipboard!");
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  };

  return (
    <div
      className="rounded-xl border-2 border-gray-400 text-[12px]
     bg-zinc-300 group relative"
    >

      {/* Hover  */}
      <div
        className="absolute bg-black inset-0 backdrop-blur-lg bg-opacity-70 opacity-0 p-2 gap-2
            group-hover:opacity-100 flex flex-col justify-center items-center rounded-xl
            transition-colors ease-in-out duration-500"
      >
        <CustomButton
          handleClick={copyHexToClipboard}
          label="Copy Hex"
          icon={filecopy}
        />
      </div>

      <div
        className="h-20 rounded-t-xl border-2 border-gray-800 w-full"
        style={{ backgroundColor: `#${hex}` }}
      ></div>
      <div className="p-2 w-full">
        <h2 className="font-semibold text-gray-950">{name}</h2>
        <p className="text-zinc-800">Hex: #{hex}</p>
        <p className="text-zinc-800">RGB: {rgb}</p>
      </div>
    </div>
  );
};

export default ColorCard;
