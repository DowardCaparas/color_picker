"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const ColorSection = () => {
  const pathname = usePathname();

  return (
    <div className="w-full flex justify-between gap-4 mt-10 max-lg:flex-wrap items-start container_padding">
      <h1 className="font-bold text-3xl">
        Availbale Colors including their names
      </h1>
      <div className="flex gap-4">
        <Link
          href={pathname === "/lightThemeColors" ? "/" : "/lightThemeColors"}
          className="border hover:bg-zinc-700 active:bg-zinc-800 p-5 rounded-md text-sm"
        >
          Show Colors for {pathname === "/lightThemeColors" ? "Dark" : "Light"}{" "}
          Mode
        </Link>
      </div>
    </div>
  );
};

export default ColorSection;
