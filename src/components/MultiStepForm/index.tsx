import { Loader } from "lucide-react";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { mockedProducts } from "../../mock";
import { Button } from "../ui/button";
import ProductSection from "./ProductSection";
import TaskDetailsSection from "./TaskDetailsSection";
import VideoSettingsSection from "./VideoSettingsSection";
interface MultiStepFormProps {
  isSaving?: boolean;
  isLastStep?: boolean;
}

const MultiStepForm: React.FC<MultiStepFormProps> = ({
  isSaving,
  isLastStep,
}) => {
  const steps: { id: string; component: React.ReactNode }[] = [
    {
      id: uuidv4(),
      component: <VideoSettingsSection stepCompleted />,
    },
    {
      id: uuidv4(),
      component: <ProductSection products={mockedProducts} stepCompleted />,
    },
    {
      id: uuidv4(),
      component: <TaskDetailsSection stepCompleted />,
    },
  ];

  return (
    <div className="w-full max-w-[80rem] flex flex-col bg-gray-100 rounded-md p-4 shadow-md">
      {steps.map((step) => (
        <div key={step.id} className="w-ful mb-4">
          {step.component}
        </div>
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
          <Button variant="ghost" className="text-[.8rem] md:text-[1rem] mr-3">
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
