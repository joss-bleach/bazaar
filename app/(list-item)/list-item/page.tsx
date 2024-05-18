import { auth } from "@clerk/nextjs/server";

// Components
import { ListItemForm } from "../_components/form/list-item-form";

const ListItemPage = () => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  return <ListItemForm userId={userId!} />;
};

export default ListItemPage;
