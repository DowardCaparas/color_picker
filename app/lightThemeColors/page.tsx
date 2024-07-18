import { ColorCard } from "@/components";
import { fetchColorsLight } from "@/utils";

const ColorForLight = async () => {
  const allLightColors = await fetchColorsLight();

  return (
    <div className="container_padding bg-zinc-950 p-5 overflow-auto h-96 md:w-3/4 my-12">
    
      <div className="grid lg:grid-cols-5 
      sm:grid-cols-3 grid-cols-2 grid-flow-row gap-3">
        {allLightColors.colors.map((color) => (
          <ColorCard
            key={color.name}
            name={color.name}
            hex={color.hex}
            rgb={color.rgb}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorForLight;
