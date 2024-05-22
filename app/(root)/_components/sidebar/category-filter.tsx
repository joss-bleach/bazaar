import { CarFront, Phone, Shirt } from "lucide-react";

// Components
import { Button } from "@/components/ui/button";

export const CategoryFilter = () => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <h2 className="text-sm font-semibold tracking-wide uppercase">
        Popular Categories
      </h2>
      <div className="w-full">
        <Button
          className="flex w-full justify-start items-center"
          variant="ghost"
        >
          <Shirt size={14} className="mr-2" /> Clothing
        </Button>
        <Button className="flex w-full justify-start" variant="ghost">
          <Phone size={14} className="mr-2" /> Electronics
        </Button>
        <Button className="flex w-full justify-start" variant="ghost">
          <CarFront size={14} className="mr-2" /> Vehicles
        </Button>
      </div>
    </div>
  );
};
