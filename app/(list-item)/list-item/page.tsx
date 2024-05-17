"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const listItemSchema = z.object({
  title: z.string().min(1).max(80, {
    message: "Title cannot be longer than 80 characters",
  }),
  price: z.number().nonnegative(),
  category: z.string().min(1),
  condition: z.string().min(1),
  brand: z.string().min(1),
  description: z.string().min(1).max(250),
});

// Components
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { TitleInput } from "../_components/form/title-input";

const ListItemPage = () => {
  const form = useForm<z.infer<typeof listItemSchema>>({
    resolver: zodResolver(listItemSchema),
    defaultValues: {
      title: "",
      price: 0,
      category: "",
      condition: "",
      brand: "",
      description: "",
    },
  });

  const handleOnSubmit = async (values: z.infer<typeof listItemSchema>) => {
    try {
      console.log(values);
    } catch (err) {
      console.log(err);
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
        </form>
      </Form>
    </section>
  );
};

export default ListItemPage;
