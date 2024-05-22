"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

// Utils
import { addQueryToUrl, RemoveQueryFromUrl } from "@/lib/utils";

// Components
import { Input } from "@/components/ui/input";

export const SearchFilter = () => {
  const [search, setSearch] = useState<string>("");

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const debounce = setTimeout(() => {
      let newUrl = "";

      if (search) {
        newUrl = addQueryToUrl({
          params: searchParams.toString(),
          key: "search",
          value: search,
        });
      } else {
        newUrl = RemoveQueryFromUrl({
          params: searchParams.toString(),
          keysToRemove: ["search"],
        });
      }
      router.push(newUrl, { scroll: false });
    }, 300);

    return () => clearTimeout(debounce);
  }, [search, searchParams, router]);

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-sm font-semibold tracking-wide uppercase">Search</h2>
      <Input
        onChange={(e) => setSearch(e.target.value)}
        className="w-full"
        type="text"
        placeholder="Search bazaar"
      />
    </div>
  );
};
