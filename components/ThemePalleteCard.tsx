import { ThemePalleteProps } from "@/types";
import Image from "next/image";
import { filecopy } from "@/public";

const ThemePalleteCard = ({
  name,
  primary,
  secondary,
  background,
  text,
}: ThemePalleteProps) => {
  // Single clipboard function
  const copyHexToClipboard = (hexCode: string) => {
    navigator.clipboard.writeText(`#${hexCode}`).then(
      () => {
        alert("Hex code copied to clipboard!");
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  };

  return (
    <div className="rounded-xl">
      <p>{name}</p>
      <div
        className="hex_theme_container rounded-t-xl group relative"
        style={{ backgroundColor: `${background}` }}
      >
        {background}

        <Image
          src={filecopy}
          alt="filecopy"
          width={30}
          height={30}
          className="copyHex_icon"
          onClick={() => copyHexToClipboard(background)}
        />
      </div>
      <div
        className="hex_theme_container group relative"
        style={{ backgroundColor: `${primary}` }}
      >
        {primary}
        <Image
          src={filecopy}
          alt="filecopy"
          width={30}
          height={30}
          className="copyHex_icon"
          onClick={() => copyHexToClipboard(primary)}
        />
      </div>
      <div
        className="hex_theme_container group relative"
        style={{ backgroundColor: `${secondary}` }}
      >
        {secondary}
        <Image
          src={filecopy}
          alt="filecopy"
          width={30}
          height={30}
          className="copyHex_icon"
          onClick={() => copyHexToClipboard(secondary)}
        />
      </div>
      <div
        className="hex_theme_container group relative"
        style={{ backgroundColor: `${text}` }}
      >
        {text}
        <Image
          src={filecopy}
          alt="filecopy"
          width={30}
          height={30}
          className="copyHex_icon"
          onClick={() => copyHexToClipboard(text)}
        />
      </div>
    </div>
  );
};

export default ThemePalleteCard;
