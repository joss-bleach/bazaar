"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Loader2, PoundSterling } from "lucide-react";
import { toast } from "sonner";
import { UploadResponse } from "imagekit/dist/libs/interfaces";
import { listItemSchema } from "@/lib/validation";

interface ListItemFormProps {
  userId: string;
}

// Components
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { TitleInput } from "./title-input";
import { CategoryInput } from "./category-input";
import { ConditionInput } from "./condition-input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ImageUpload } from "./image-upload";
import { ItemProps } from "@/database/models/item.model";
import { createItem } from "@/actions/item.actions";

export const ListItemForm = ({ userId }: ListItemFormProps) => {
  const [files, setFiles] = useState<UploadResponse[]>([]);

  const router = useRouter();
  const form = useForm<z.infer<typeof listItemSchema>>({
    resolver: zodResolver(listItemSchema),
    defaultValues: {
      title: "",
      price: "",
      category: "",
      condition: "",
      brand: "",
      description: "",
    },
  });

  const handleOnSubmit = async (values: z.infer<typeof listItemSchema>) => {
    try {
      let images: string[] = [];
      files.map((file) => {
        images = [...images, file.url];
      });
      const newItem: ItemProps = await createItem({
        item: { ...values, photos: images },
        userId,
      });

      if (newItem) {
        form.reset();
        router.push(`/listings/${newItem._id}`);
        toast.success(`${values.title} listed for sale.`);
      }
    } catch (err) {
      toast.error("Unable to list item. Please try again.");
    }
  };

  const titleValue = form.watch("title");

  return (
    <section className="py-12 max-w-prose mx-auto">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-semibold">List an item</h1>
        <p className="text-muted-foreground">
          Fill out the form below to sell your item
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleOnSubmit)}
          className="space-y-8 py-8"
        >
          <TitleInput value={titleValue} control={form.control} />
          <div className="flex flex-row gap-8">
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <div className="flex flex-col">
                    <FormLabel className="text-xl font-semibold">
                      Price
                    </FormLabel>
                    <p className="text-muted-foreground">
                      Buyers can purchase your item at this price
                    </p>
                  </div>
                  <FormControl>
                    <div className="relative flex items-center">
                      <PoundSterling
                        className="text-muted-foreground absolute left-2"
                        size={16}
                      />
                      <Input {...field} className="pl-8" type="number" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <CategoryInput control={form.control} />
          </div>
          <div className="flex flex-row gap-8">
            <ConditionInput control={form.control} />
            <FormField
              control={form.control}
              name="brand"
              render={({ field }) => (
                <FormItem>
                  <div className="flex flex-col">
                    <FormLabel className="text-xl font-semibold">
                      Brand
                    </FormLabel>
                    <p className="text-muted-foreground">
                      The brand or manufacturer of the item you&apos;re selling
                    </p>
                  </div>
                  <FormControl>
                    <Input placeholder="Enter the brand name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <div className="flex flex-col">
                  <FormLabel className="text-xl font-semibold">
                    Description
                  </FormLabel>
                  <p className="text-muted-foreground">
                    Write a detailed description of your item
                  </p>
                </div>
                <FormControl>
                  <Textarea
                    className="resize-none w-full h-72"
                    placeholder="Description"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <ImageUpload files={files} setFiles={setFiles} />
          <div className="flex justify-end w-full">
            <Button
              disabled={form.formState.isSubmitting}
              className="w-40"
              type="submit"
            >
              {form.formState.isSubmitting ? (
                <Loader2 className="animate-spin" />
              ) : (
                "List item"
              )}
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
};
