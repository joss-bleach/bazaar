import { PoundSterling } from "lucide-react";

// Components
import { Input } from "@/components/ui/input";

export const PriceFilter = () => {
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
  );
};
