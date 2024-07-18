import Image from "next/image";
import { HeroBG } from "@/public/images";
import CustomButton from "./CustomButton";
import { magnifyingGlass } from "@/public";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex max-md:flex-wrap justify-between h-[600px] items-end gap-6 
    bg-zinc-950 overflow-hidden">
      <div className="flex flex-col max-md:mx-auto max-md:text-center max-md:mt-28 
      xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-4xl font-bold container_padding my-auto">
        <p className="uppercase text-[12px] font-medium text-green-500">
          Discover your perfect pallete
        </p>
        <span>
          Color <br /> Center
        </span>
        
        <p className="text-sm font-normal md:w-3/4 text-gray-300">
          Welcome to our theme collection! Explore 20 color themes, 10 light and
          10 dark, to enhance your web projects. Each theme offers unique
          visuals and usability, ensuring a vibrant and versatile transformation
          for your website.
        </p>
        <Link href='#explore'>
        <CustomButton
          label="Explore Now"
          containerStyles="md:w-1/3 max-md:mx-auto mt-10 gap-2"
          icon={magnifyingGlass}
          
        />
        </Link>
       
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
