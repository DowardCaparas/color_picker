"use client";

import { usePathname, useRouter } from "next/navigation";

const ColorSection = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = () => {
    router.push(pathname === "/lightThemeColors" ? "/" : "/lightThemeColors");
  };

  return (
    <div className="w-full flex justify-between gap-4 mt-10 max-lg:flex-wrap items-start container_padding">
      <h1 className="font-bold text-3xl">
        Available Colors including their names
      </h1>
      <div className="flex gap-4">
        <button
          onClick={handleNavigation}
          className="border hover:bg-zinc-700 active:bg-zinc-800 p-5 rounded-md text-sm"
        >
          Show Colors for {pathname === "/lightThemeColors" ? "Dark" : "Light"} Mode
        </button>
      </div>
    </div>
  );
};

export default ColorSection;
