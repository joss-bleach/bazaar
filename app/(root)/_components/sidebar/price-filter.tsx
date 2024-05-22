"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

// Utils
import { addQueryToUrl, RemoveQueryFromUrl } from "@/lib/utils";

import { PoundSterling } from "lucide-react";

// Components
import { Input } from "@/components/ui/input";

export const PriceFilter = () => {
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const debounce = setTimeout(() => {
      let newUrl = "";

      if (minPrice) {
        newUrl = addQueryToUrl({
          params: searchParams.toString(),
          key: "min",
          value: minPrice,
        });
      } else {
        newUrl = RemoveQueryFromUrl({
          params: searchParams.toString(),
          keysToRemove: ["min"],
        });
      }

      router.push(newUrl, { scroll: false });
    }, 300);

    return () => clearTimeout(debounce);
  }, [minPrice, searchParams, router]);

  useEffect(() => {
    const debounce = setTimeout(() => {
      let newUrl = "";

      if (maxPrice) {
        newUrl = addQueryToUrl({
          params: searchParams.toString(),
          key: "max",
          value: maxPrice,
        });
      } else {
        newUrl = RemoveQueryFromUrl({
          params: searchParams.toString(),
          keysToRemove: ["max"],
        });
      }

      router.push(newUrl, { scroll: false });
    }, 300);

    return () => clearTimeout(debounce);
  }, [maxPrice, searchParams, router]);

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-sm font-semibold tracking-wide uppercase">
        Filter by price
      </h2>
      <div className="flex flex-row items-center gap-2">
        <div className="relative flex items-center">
          <PoundSterling
            className="text-muted-foreground absolute left-2"
            size={16}
          />
          <Input
            onChange={(e) => setMinPrice(e.target.value)}
            placeholder="min"
            className="pl-6"
            type="number"
          />
        </div>
        <div className="relative flex items-center">
          <PoundSterling
            className="text-muted-foreground absolute left-2"
            size={16}
          />
          <Input
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="max"
            className="pl-6"
            type="number"
          />
        </div>
      </div>
    </div>
  );
};
