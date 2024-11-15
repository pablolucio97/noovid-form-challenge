import React from "react";
import TimerCard from "./TimerCard";

const VideoDurationSelector: React.FC = () => {
  const timerOptions: Array<"30s" | "45s" | "60s"> = ["30s", "45s", "60s"];

  return (
    <div className="w-full flex items-center p-4">
      <div className="w-[40%] flex flex-col">
        <div className="flex mt-2">
          <span className="text-[.8rem] md:text-[1rem] font-bold">
            Video duration
          </span>
          <span className="ml-1 text-red-400">*</span>
        </div>
        <p className="text-[.7rem] md:text-[.9rem] text-gray-700">
          How long should the video be?
        </p>
      </div>
      <div className="w-full flex flex-col md:flex-row ml-4 md:max-w-[24rem] lg:ml-[-4rem] gap-4">
        {timerOptions.map((timer) => (
          <TimerCard key={timer} time={timer} isSelected={timer === "45s"} />
        ))}
      </div>
    </div>
  );
};

export default VideoDurationSelector;
