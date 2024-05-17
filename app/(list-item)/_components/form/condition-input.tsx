"use client";
import { useState, useEffect, startTransition } from "react";
import { Control } from "react-hook-form";
import { z } from "zod";

import { listItemSchema } from "../../list-item/page";

// Components
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ConditionInputProps {
  control: Control<z.infer<typeof listItemSchema>>;
}

export const ConditionInput = ({ control }: ConditionInputProps) => {
  return (
    <div className="w-[50%]">
      <FormField
        control={control}
        name="condition"
        render={({ field }) => (
          <FormItem>
            <div className="flex flex-col">
              <FormLabel className="text-xl font-semibold">Condition</FormLabel>
              <p className="text-muted-foreground">
                Disclose all wear or defects to prevent refunds
              </p>
            </div>
            <FormControl>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Condition" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="like new">Like New</SelectItem>
                  <SelectItem value="excellent">Excellent</SelectItem>
                  <SelectItem value="very good">Very good</SelectItem>
                  <SelectItem value="good">Good</SelectItem>
                  <SelectItem value="fair">Fair</SelectItem>
                  <SelectItem value="parts or repair">
                    For parts or repair
                  </SelectItem>
                </SelectContent>
              </Select>
            </FormControl>
            <FormDescription>
              {field.value === "new"
                ? "The item is brand new and unused."
                : field.value === "like new"
                ? "The item has been used very little and shows minimal signs of wear."
                : field.value === "excellent"
                ? "The item is in excellent condition with some minor signs of wear."
                : field.value === "very good"
                ? "The item is in good condition with some noticeable signs of wear."
                : field.value === "good"
                ? "The item is functional but shows significant signs of wear."
                : field.value === "fair"
                ? "The item has significant wear and tear but is still usable."
                : field.value === "parts or repair"
                ? "The item is not functional and is only good for parts or repair."
                : ""}
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};
