import React, { Dispatch, SetStateAction } from "react";
import { Slider } from "../../../ui/slider";
interface NumberOfCreatorsInputProps {
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
}

const NumberOfCreatorsInput: React.FC<NumberOfCreatorsInputProps> = ({
  value,
  setValue,
}) => {
  const dynamicSpacingReason = 10;
  const absoluteSpacingReason = 8;
  const dynamicValueLabelSpacing =
    value * dynamicSpacingReason - absoluteSpacingReason;

  return (
    <div className="w-full flex flex-col md:flex-row  md:items-center p-4">
      <div className="w-[40%] flex flex-col">
        <div className="flex mt-2">
          <span className="text-[.8rem] md:text-[1rem] font-bold">
            Number of creators
          </span>
          <span className="ml-1 text-red-400">*</span>
        </div>
        <p className="text-[.7rem] md:text-[.9rem] text-gray-700 mb-4">
          How many creators can participate?
        </p>
      </div>
      <div className="w-full flex flex-col max-w-[16rem] md:ml-4 lg:ml-[-4rem] relative">
        <Slider
          defaultValue={[value]}
          max={10}
          min={1}
          step={1}
          onValueChange={(newValue) =>
            setValue(newValue as unknown as SetStateAction<number>)
          }
          aria-labelledby="slider-label"
          className="bg-gray-200 rounded-md text-secondary"
        />
        <p
          className="text-[.8rem] md:text-[1rem] font-bold mt-4"
          style={{ position: "absolute", left: `${dynamicValueLabelSpacing}%` }}
        >
          {value}
        </p>
      </div>
    </div>
  );
};

export default NumberOfCreatorsInput;
