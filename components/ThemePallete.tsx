"use client";

import { themesPallete } from "@/constants";
import ThemePalleteCard from "./ThemePalleteCard";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ThemePallete = () => {
  const pathname = usePathname();

  return (
    <div className={`w-full container_padding ${pathname === '/' ? '-mt-10' : 'mt-14'}`}>
      <h1 className="font-bold text-3xl">Different type of Themes</h1>
      <>

        {themesPallete.map((item, index) => (
          <div
            key={index}
            className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 grid-flow-row gap-4 mt-5"
          >
            {pathname === "/"
              ? item.dark_mode.map((mode, index) => (
                  <ThemePalleteCard
                    key={index}
                    name={mode.name}
                    primary={mode.primary}
                    secondary={mode.secondary}
                    background={mode.background}
                    text={mode.text}
                  />
                ))
              : item.light_mode.map((mode, index) => (
                  <ThemePalleteCard
                    key={index}
                    name={mode.name}
                    primary={mode.primary}
                    secondary={mode.secondary}
                    background={mode.background}
                    text={mode.text}
                  />
                ))}
          </div>
        ))}
      </>
    </div>
  );
};

export default ThemePallete;
