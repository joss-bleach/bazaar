"use client";
import { useState, useEffect } from "react";

import { z } from "zod";
import { Control } from "react-hook-form";
import { listItemSchema } from "@/lib/validation";

interface TitleInputProps {
  control: Control<z.infer<typeof listItemSchema>>;
  value: string;
}

// Components
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export const TitleInput = ({ control, value }: TitleInputProps) => {
  const [validationMessage, setValidationMessage] = useState<string>(
    "Too short. Include details such as brand, colour, specs, condition, etc."
  );
  const [barLength, setBarLength] = useState<number>(0);
  const [barColour, setBarColour] = useState<string>("#ef4444");
  const [barBackgroundColour, setBarBackgroundColour] =
    useState<string>("#fee2e2");

  useEffect(() => {
    if (value.length < 25) {
      setValidationMessage(
        "Too short. Include details such as brand, colour, specs, condition, etc."
      );
      setBarColour("#ef4444");
      setBarBackgroundColour("#fee2e2");
    }
    if (value.length > 25 && value.length < 55) {
      setValidationMessage(
        "Better. Have you included details such as brand, colour, specs, condition, etc."
      );
      setBarColour("#f59e0b");
      setBarBackgroundColour("#fef3c7");
    }
    if (value.length > 55 && value.length < 70) {
      setValidationMessage(
        "Good length. Make sure you have included details such as brand, colour, specs, condition, etc."
      );
      setBarColour("#22c55e");
      setBarBackgroundColour("#dcfce7");
    }
    if (value.length > 70) {
      setValidationMessage("Good length.");
    }
  }, [value]);

  useEffect(() => {
    const percentageComplete = (value.length / 80) * 100;
    setBarLength(percentageComplete);
  }, [value]);

  return (
    <FormField
      control={control}
      name="title"
      render={({ field }) => (
        <FormItem>
          <div className="flex flex-col">
            <FormLabel className="text-xl font-semibold">Title</FormLabel>
            <p className="text-muted-foreground">
              Use words people would search for when they look for items like
              yours
            </p>
          </div>
          <FormControl>
            <Input maxLength={80} placeholder="Enter your title" {...field} />
          </FormControl>
          <div className="flex flex-row items-center gap-2">
            <div className="relative rounded">
              <div
                className="h-1 w-4 rounded transition"
                style={{
                  backgroundColor: barBackgroundColour,
                }}
              />
              <div
                style={{ width: `${barLength}%`, backgroundColor: barColour }}
                className="absolute inset-0 h-full rounded transition overflow-hidden z-10"
              />
            </div>
            <FormDescription>
              {validationMessage} {value.length}/80
            </FormDescription>
          </div>
        </FormItem>
      )}
    />
  );
};
