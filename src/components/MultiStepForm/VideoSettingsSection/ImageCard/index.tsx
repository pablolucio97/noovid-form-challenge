import { Check } from "lucide-react";

import React from "react";

interface ImageCardProps {
  isSelected?: boolean;
  videoType: "video-ad" | "honest-review";
}

const ImageCard: React.FC<ImageCardProps> = ({ isSelected, videoType }) => {
  const imageUrl = `https://placehold.co/240x160/ededed/c63bed?text=${
    videoType === "video-ad" ? "Video+Ad" : "Honest+Review"
  }.webp`;

  return (
    <div
      className={`w-full flex flex-col md:max-w-[16rem] shadow-md  p-1 rounded-md relative`}
    >
      <div
        className={`w-full border-2 ${
          isSelected ? "border-secondary" : "border-gray-100"
        } rounded-md p-1`}
      >
        {isSelected && (
          <div className="w-5 h-5 flex items-center justify-center rounded-[1rem] z-10 bg-secondary absolute right-[-.4em] top-[-.4rem] p-1">
            <Check color="white" strokeWidth={4} />
          </div>
        )}
        <img
          src={imageUrl}
          alt={videoType === "honest-review" ? "honest-review" : "video-ad"}
          className="w-full"
        />
      </div>
      {videoType === "video-ad" ? (
        <div className="flex flex-col mt-1 m-2">
          <span className="font-bold mt-3  text-[.8rem] md:text-[1rem]">
            Video ad
          </span>
          <p className="text-[.7rem] md:text-[.85rem] text-gray-600 max-w-[70%]">
            Perfect for you social medias campaigns
          </p>
        </div>
      ) : (
        <div className="flex flex-col mt-1 m-2">
          <span className="font-bold mt-3  text-[.8rem] md:text-[1rem]">
            Honest review
          </span>
          <p className="text-[.7rem] md:text-[.85rem] text-gray-600 max-w-[70%]">
            Authentic experiences with your products{" "}
          </p>
        </div>
      )}
    </div>
  );
};

export default ImageCard;
