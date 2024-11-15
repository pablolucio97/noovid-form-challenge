import { Check, Scan, Smartphone } from "lucide-react";
import React from "react";
interface AspectRatioCardProps {
  aspectRatio: "Any" | "Landscape" | "Portrait";
  isSelected?: boolean;
}

const AspectRatioCard: React.FC<AspectRatioCardProps> = ({
  aspectRatio,
  isSelected,
}) => {
  let icon = null;

  switch (aspectRatio) {
    case "Any":
      icon = <Scan />;
      break;
    case "Landscape":
      icon = <Smartphone className="rotate-[270deg]" />;
      break;
    case "Portrait":
      icon = <Smartphone />;
      break;
    default:
      icon = <Smartphone />;
  }

  return (
    <div className="flex flex-col">
      <div
        className={` w-[15vw] md:w-[7.5rem] flex items-center justify-center border-2 ${
          isSelected
            ? "border-secondary  bg-purple-50"
            : "border-gray-200 bg-none"
        } rounded-md p-2 md:p-4  cursor-pointer relative`}
      >
        {isSelected && (
          <div className="w-4 h-4 flex items-center justify-center rounded-[1rem] z-10 bg-secondary absolute right-[-.4em] top-[-.4rem] p-1">
            <Check color="white" strokeWidth={4} />
          </div>
        )}
        <span className="text-[.8rem] md:text-[1rem] font-bold text-gray-800 ml-1">
          {icon}
        </span>
      </div>
      <span
        className={`text-[.8rem] md:text-[1rem] ${
          isSelected && "font-bold"
        } text-gray-800 mt-1 md:text-center`}
      >
        {aspectRatio}
      </span>
    </div>
  );
};

export default AspectRatioCard;
