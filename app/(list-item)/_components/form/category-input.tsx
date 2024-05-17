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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";

interface CategoryInputProps {
  control: Control<z.infer<typeof listItemSchema>>;
}

// Test
const categoryList = ["Electronics", "Clothing", "Vehicles"];

export const CategoryInput = ({ control }: CategoryInputProps) => {
  const [categories, setCategories] = useState<string[]>([""]);
  const [newCategory, setNewCategory] = useState<string>("");

  useEffect(() => {
    const getCategories = async () => {
      const savedCategories = categoryList;
      if (!savedCategories) {
        return;
      }
      setCategories(savedCategories);
    };
    getCategories();
  }, []);

  const handleAddNewCategory = () => {
    setCategories((previousState) => [...previousState, newCategory]);
  };

  return (
    <FormField
      control={control}
      name="category"
      render={({ field }) => (
        <FormItem>
          <div className="flex flex-col">
            <FormLabel className="text-xl font-semibold">Category</FormLabel>
            <p className="text-muted-foreground">
              Select the most suitable category for your item
            </p>
          </div>
          <FormControl>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {categories.length > 0 &&
                  categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                <AlertDialog>
                  <AlertDialogTrigger className="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:cursor-pointer font-semibold text-primary">
                    <Plus size={16} className="mr-1" /> Add a category
                  </AlertDialogTrigger>
                  <AlertDialogContent className="bg-white">
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Add the most suitable category for your item
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        <Input
                          type="text"
                          placeholder="Enter a category name"
                          className="input-field mt-3"
                          onChange={(e) => setNewCategory(e.target.value)}
                        />
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => startTransition(handleAddNewCategory)}
                      >
                        Add
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
