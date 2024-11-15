import { Check } from "lucide-react";

import React from "react";
import { formatUSD } from "../../../../lib/format";

export interface IProduct {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
}

interface ProductCardProps extends IProduct {
  isSelected?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  isSelected,
  title,
  price,
  imageUrl,
}) => {
  return (
    <div
      className={`w-full flex border-2 ${
        isSelected ? "border-secondary" : "border-gray-100"
      } rounded-md  items-center py-1 px-3`}
    >
      <img
        src={imageUrl}
        alt={`${title}`}
        className="h-10 w-10 md:w-12 md:h-12 rounded-md border-2 border-gray-200"
      />
      <div className="flex flex-col mt-1 m-2 grow">
        <span className="font-bold mt-3  text-[.7rem] md:text-[.8rem]">
          {title}
        </span>
        <p className="text-[.6rem] md:text-[.75rem] text-gray-600 max-w-[70%]">
          {formatUSD(price)}
        </p>
      </div>
      {isSelected && (
        <div className="w-5 h-5 flex items-center justify-center rounded-[1rem] z-10 bg-secondary p-1">
          <Check color="white" strokeWidth={4} />
        </div>
      )}
    </div>
  );
};

export default ProductCard;
