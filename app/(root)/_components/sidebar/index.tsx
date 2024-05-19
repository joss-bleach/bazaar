"use client";

import { CarFront, Phone, PoundSterling, Shirt } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Sidebar = () => {
  return (
    <aside className="sticky left-0 top-0 flex h-full w-[250px] flex-col border-r border-border bg-white py-8 px-4 gap-4">
      <h1 className="sr-only">Filter items being sold</h1>
      <div className="flex flex-col gap-2">
        <h2 className="text-sm font-semibold tracking-wide uppercase">
          Search
        </h2>
        <Input className="w-full" type="text" placeholder="Search bazaar" />
      </div>
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
            <Input placeholder="min" className="pl-6" type="number" />
          </div>
          <div className="relative flex items-center">
            <PoundSterling
              className="text-muted-foreground absolute left-2"
              size={16}
            />
            <Input placeholder="max" className="pl-6" type="number" />
          </div>
        </div>
      </div>
    </aside>
  );
};
