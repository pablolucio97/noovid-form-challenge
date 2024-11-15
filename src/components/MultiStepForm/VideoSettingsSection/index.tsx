import { CircleCheck, CircleDot } from "lucide-react";
import { Separator } from "../../../components/ui/separator";

import React, { Dispatch, SetStateAction, useState } from "react";
import ImageCard from "./ImageCard";
import NumberOfCreatorsInput from "./NumberOfCreatorsInput";

interface VideoSettingsSectionProps {
  stepCompleted?: boolean;
}

const VideoSettingsSection: React.FC<VideoSettingsSectionProps> = ({
  stepCompleted,
}) => {
  const [numberOfCreators, setNumberOfCreators] = useState<number[]>([2]);

  return (
    <div className="flex flex-col  bg-gray-100">
      <div className="flex items-center">
        {stepCompleted ? (
          <CircleCheck className="bg-success text-white rounded-[1rem] mt-[-.75rem] mr-2" />
        ) : (
          <CircleDot className="bg-primary text-white rounded-[1rem] mt-[-.75rem] mr-2" />
        )}
        <h2 className="text-[.8rem] md:text-[1rem] font-bold mb-3">
          Video settings
        </h2>
      </div>
      <div className="w-full flex flex-col bg-white p-4 border-2 border-gray-200  rounded-md">
        <span className="text-[.75rem] md:text-[.8rem] mb-2 font-bold text-gray-700">
          Select the type of video you want
        </span>
        <div className="w-full flex flex-col md:flex-row mb-4 gap-4">
          <ImageCard videoType="video-ad" />
          <ImageCard videoType="honest-review" isSelected />
        </div>
        <Separator />
        <NumberOfCreatorsInput
          value={numberOfCreators as unknown as number}
          setValue={
            setNumberOfCreators as unknown as Dispatch<SetStateAction<number>>
          }
        />
      </div>
    </div>
  );
};

export default VideoSettingsSection;
