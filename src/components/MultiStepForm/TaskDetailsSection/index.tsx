import { CircleCheck, CircleDot } from "lucide-react";
import { Separator } from "../../../components/ui/separator";

import { Label } from "@radix-ui/react-label";
import React from "react";
import { ageOptions, genderOptions, segmentOptions } from "../../../mock";
import { Checkbox } from "../../ui/checkbox";
import { Input } from "../../ui/input";
import { RadioGroup, RadioGroupItem } from "../../ui/radio-group";

interface TaskDetailsSectionProps {
  stepCompleted?: boolean;
}

const TaskDetailsSection: React.FC<TaskDetailsSectionProps> = ({
  stepCompleted,
}) => {
  return (
    <div className="flex flex-col bg-gray-100">
      <div className="flex items-center">
        {stepCompleted ? (
          <CircleCheck className="bg-success text-white rounded-[1rem] mt-[-.75rem] mr-2" />
        ) : (
          <CircleDot className="bg-primary text-white rounded-[1rem] mt-[-.75rem] mr-2" />
        )}
        <h2 className="text-[.8rem] md:text-[1rem] font-bold mb-3">
          Task details
        </h2>
      </div>

      <div className="w-full flex flex-col bg-white p-4 border-2 border-gray-200  rounded-md">
        <div className="w-full flex flex-col md:flex-row md:items-center mb-2">
          <div className="flex flex-col">
            <div className="flex mt-2">
              <span className="text-[.8rem] md:text-[1rem] font-bold">
                Task name
              </span>
              <span className="ml-1 text-red-400">*</span>
            </div>
            <p className="text-[.7rem] md:text-[.9rem] text-gray-700 mb-4">
              Provide an attractive name for your task
            </p>
          </div>
          <div className="w-full md:w-[24rem] md:ml-6">
            <Input
              type="text"
              placeholder="Task name"
              className="pl-3  text-[.75rem] md:text-[.8rem]"
            />
          </div>
        </div>

        <Separator className="mb-6" />

        <div className="w-full md:max-w-[60%] flex flex-col">
          <h2 className="text-[.8rem] md:text-[1rem] font-bold mb-3">
            Creators
          </h2>
          <div className="w-full flex flex-col md:flex-row md:items-center mb-2">
            <div className="w-full flex flex-col">
              <div className="w-full flex mt-2">
                <span className="text-[.8rem] md:text-[1rem] font-bold">
                  Gender
                </span>
                <span className="ml-1 text-red-400">*</span>
              </div>
              <p className="text-[.7rem] md:text-[.9rem] text-gray-700 mb-4">
                Select your preferred gender
              </p>
            </div>
            <div className="w-full flex flex-col md:flex-row">
              <RadioGroup defaultValue="male" className="flex">
                {genderOptions.map((option) => (
                  <div className="flex items-center space-x-2" key={option.id}>
                    <RadioGroupItem value={option.label} id="r2" />
                    <Label
                      htmlFor="r2"
                      className="text-[.7rem] md:text-[.9rem] text-gray-700"
                    >
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row md:items-center mb-2">
            <div className="w-full flex flex-col">
              <div className=" flex mt-2">
                <span className="text-[.8rem] md:text-[1rem] font-bold">
                  Age
                </span>
                <span className="ml-1 text-red-400">*</span>
              </div>
              <p className="text-[.7rem] md:text-[.9rem] text-gray-700 mb-4">
                How old should the creator be?
              </p>
            </div>
            <div className="w-full flex flex-col">
              <RadioGroup defaultValue="male" className="flex flex-col">
                {ageOptions.map((option) => (
                  <div className="flex items-center space-x-2" key={option.id}>
                    <RadioGroupItem value={option.label} id="r2" />
                    <Label
                      htmlFor="r2"
                      className="text-[.7rem] md:text-[.9rem] text-gray-700"
                    >
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>
        </div>

        <Separator className="mb-6" />

        <h2 className="text-[.8rem] md:text-[1rem] font-bold mb-3">Segment</h2>
        <div className="w-full flex flex-col md:flex-row md:items-center mb-2">
          <div className="w-[25%] flex flex-col">
            <div className="flex mt-2">
              <span className="text-[.8rem] md:text-[1rem] font-bold">
                Categories
              </span>
              <span className="ml-1 text-red-400">*</span>
            </div>
            <p className="text-[.7rem] md:text-[.9rem] text-gray-700 mb-4">
              How creator can find for your task?
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {segmentOptions.map((option) => (
              <div
                className="flex justify-start items-center space-x-2 mb-1 md:ml-[2.5rem] lg:ml-[4rem]"
                key={option.id}
              >
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-[.7rem] md:text-[.9rem] text-gray-700"
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetailsSection;
