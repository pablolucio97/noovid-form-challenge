import React from "react";

interface SectorInputProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const SectorInput: React.FC<SectorInputProps> = ({
  title,
  subtitle,
  children,
}) => {
  return (
    <div className="w-full flex flex-col md:flex-row  p-4">
      <div className="w-full md:w-[40%] flex flex-col">
        <div className="flex mt-2">
          <span className="text-[.8rem] md:text-[1rem] font-bold">{title}</span>
          <span className="ml-1 text-red-400">*</span>
        </div>
        <p className="text-[.7rem] md:text-[.9rem] text-gray-700 mb-4">
          {subtitle}
        </p>
      </div>
      <div className="w-full flex gap-2 md:gap-4 md:ml-4">{children}</div>
    </div>
  );
};

export default SectorInput;
