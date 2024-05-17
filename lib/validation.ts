import { z } from "zod";

export const listItemSchema = z.object({
  title: z.string().min(1).max(80, {
    message: "Title cannot be longer than 80 characters",
  }),
  price: z.string().refine((val) => !Number.isNaN(parseInt(val, 10)), {
    message: "Expected number, received a string",
  }),
  category: z.string().min(1),
  condition: z.string().min(1),
  brand: z.string().min(1),
  description: z.string().min(1).max(250),
  imageUrls: z.string().array().optional(),
});
