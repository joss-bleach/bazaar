"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { CarFront, Medal, Phone, Shirt } from "lucide-react";

// Utils
import { addQueryToUrl, RemoveQueryFromUrl } from "@/lib/utils";

// Components
import { Button } from "@/components/ui/button";

const popularCategories = [
  {
    label: "Clothing",
    id: "664df8639c1f418dd5c1038b",
    icon: Shirt,
  },
  {
    label: "Electronics",
    id: "6648ba12dee0fe79a4e46750",
    icon: Phone,
  },
  {
    label: "Vehicles",
    id: "664df86a9c1f418dd5c1038d",
    icon: CarFront,
  },
  {
    label: "Collectables",
    id: "664df95b9c1f418dd5c10391",
    icon: Medal,
  },
];

export const CategoryFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleOnSelectCategory = (categoryId: string) => {
    let newUrl = "";
    if (!searchParams.get("category")) {
      newUrl = addQueryToUrl({
        params: searchParams.toString(),
        key: "category",
        value: categoryId,
      });
    } else {
      newUrl = RemoveQueryFromUrl({
        params: searchParams.toString(),
        keysToRemove: ["category"],
      });
    }

    router.push(newUrl, { scroll: false });
  };
  return (
    <div className="flex flex-col gap-2 w-full">
      <h2 className="text-sm font-semibold tracking-wide uppercase">
        Popular Categories
      </h2>
      <div className="w-full">
        {popularCategories.map(({ label, id, icon: Icon }) => {
          return (
            <Button
              key={id}
              className="flex w-full justify-start items-center"
              variant="ghost"
              onClick={() => handleOnSelectCategory(id)}
            >
              <Icon size={14} className="mr-2" /> {label}
            </Button>
          );
        })}
      </div>
    </div>
  );
};
