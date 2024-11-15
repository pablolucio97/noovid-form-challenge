import { CircleCheck, CircleDot, Search } from "lucide-react";
import { Input } from "../../ui/input";
import ProductCard, { IProduct } from "./ProductCard";

interface ProductSectionProps {
  products: IProduct[];
  stepCompleted: boolean;
}

const ProductSection: React.FC<ProductSectionProps> = ({
  products,
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
        <h2 className="text-[.8rem] md:text-[1rem] font-bold mb-3">Product</h2>
      </div>
      <div className="w-full flex flex-col bg-white p-4 border-2 border-gray-200  rounded-md">
        <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center">
          <span className="w-full text-[.75rem] md:text-[.8rem] mb-2 font-bold text-gray-700">
            Select the product you want to presents
          </span>
          <div className="w-full max-w-[20rem] relative mb-6">
            <Input
              type="text"
              placeholder="Search products"
              className="pl-10  text-[.75rem] md:text-[.8rem]"
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-700"
              size={16}
            />
          </div>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              imageUrl={product.imageUrl}
              isSelected={product.price === 399}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
