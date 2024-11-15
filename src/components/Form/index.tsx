import { Loader } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
interface MultiStepFormProps {
  steps: React.ReactNode[];
  isSaving?: boolean;
  isLastStep?: boolean;
}

const MultiStepForm: React.FC<MultiStepFormProps> = ({
  isSaving,
  isLastStep,
  steps,
}) => {
  return (
    <div className="w-full max-w-[80rem] flex flex-col bg-gray-100 rounded-md p-4 shadow-md">
      {steps.map((step) => (
        <div className="w-ful mb-4">{step}</div>
      ))}
      <div className="w-full bg-white py-4 px-6 rounded-md flex justify-between items-center">
        <div className="flex items-center">
          {isSaving && (
            <>
              <Loader className="animate-spin mr-3" size={20} />
              <span className="text-[.8rem] md:text-[1rem]">Saving...</span>
            </>
          )}
        </div>
        <div className="flex items-center">
          <Button variant="ghost" className="text-[.8rem] md:text-[1rem]">
            Cancel
          </Button>
          <Button className="bg-primary hover:bg-secondary text-[.8rem] md:text-[1rem]">
            {isLastStep ? "Send" : "Continue"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
