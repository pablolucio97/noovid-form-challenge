import { Check, Timer } from "lucide-react";
import React from "react";
interface TimerCardProps {
  time: "30s" | "45s" | "60s";
  isSelected?: boolean;
}

const TimerCard: React.FC<TimerCardProps> = ({ time, isSelected }) => {
  let cost = "";

  switch (time) {
    case "30s":
      cost = "$49";
      break;
    case "45s":
      cost = "$99";
      break;
    case "60s":
      cost = "$149";
      break;
    default:
      cost = "$49";
  }

  return (
    <div className="flex flex-col">
      <div
        className={`w-[7.5rem] flex items-center justify-center border-2 ${
          isSelected
            ? "border-secondary  bg-purple-50"
            : "border-gray-200 bg-none"
        } rounded-md p-4  cursor-pointer relative`}
      >
        {isSelected && (
          <div className="w-4 h-4 flex items-center justify-center rounded-[1rem] z-10 bg-secondary absolute right-[-.4em] top-[-.4rem] p-1">
            <Check color="white" strokeWidth={4} />
          </div>
        )}
        <Timer size={20} />
        <span className="text-[.8rem] md:text-[1rem] font-bold text-gray-800 ml-1">
          {time}
        </span>
      </div>
      <span
        className={`text-[.8rem] md:text-[1rem] ${
          isSelected && "font-bold"
        } text-gray-800 mt-1 md:text-center`}
      >
        {cost}
      </span>
    </div>
  );
};

export default TimerCard;
