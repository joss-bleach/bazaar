export type ListItemParams = {
  userId: string;
  item: {
    title: string;
    price: string;
    category: string;
    condition: string;
    brand: string;
    description: string;
    photos: string[];
  };
};
