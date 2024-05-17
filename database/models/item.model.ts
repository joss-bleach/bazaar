import { Schema, model, models, Document } from "mongoose";
import { UserProps } from "./user.model";
import { CategoryProps } from "./category.model";

export interface ItemProps extends Document {
  title: string;
  price: number;
  category: string;
  condition: string | CategoryProps;
  brand: string;
  description: string;
  photos: string[];
  user: string | UserProps;
}

const ItemSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  condition: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  photos: {
    type: [String],
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Item = models.Item || model("Item", ItemSchema);
export default Item;
