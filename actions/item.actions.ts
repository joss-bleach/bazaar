"use server";

// Types
import { ListItemParams } from "@/types";

// Utilities
import { handleError } from "@/lib/utils";

// Mongo
import { connectToDatabase } from "@/database";
import User from "@/database/models/user.model";
import Item from "@/database/models/item.model";

export const createItem = async ({ userId, item }: ListItemParams) => {
  try {
    await connectToDatabase();
    const sellerDetails = await User.findById(userId);
    if (!sellerDetails) {
      throw new Error("Could not find seller details.");
    }

    const newItem = await Item.create({
      ...item,
      user: sellerDetails,
    });

    if (!newItem) {
      throw new Error("Could not list item for sale.");
    }

    return JSON.parse(JSON.stringify(newItem));
  } catch (err) {
    handleError(err);
  }
};
