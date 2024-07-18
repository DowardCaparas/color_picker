import Image from "next/image";
import { HeroBG } from "@/public/images";
import CustomButton from "./CustomButton";
import { magnifyingGlass } from "@/public";

const Hero = () => {
  return (
    <div className="flex max-md:flex-wrap justify-between h-[600px] items-end gap-6 bg-zinc-950 overflow-hidden">
      <div className="flex flex-col max-md:mx-auto max-md:text-center max-md:mt-28 xl:text-9xl lg:text-8xl md:text-7xl sm:text-6xl text-5xl font-bold container_padding my-auto">
        <p className="uppercase text-[12px] font-medium text-green-500">
          Discover your <br /> perfect pallete
        </p>
        <span>
          Color <br /> Center
        </span>
        <CustomButton
          label="Explore Now"
          containerStyles="md:w-1/3 mt-10"
          icon={magnifyingGlass}
        />
      </div>
      <Image
        src={HeroBG}
        alt="Flower"
        width={500}
        height={502}
        className="object-cover w-full bottom-0"
        quality={100}
      />
    </div>
  );
};

export default Hero;
