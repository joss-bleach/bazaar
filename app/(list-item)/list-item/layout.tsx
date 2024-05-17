interface ListItemLayoutProps {
  children: React.ReactNode;
}

// Components
import { Header } from "@/components/shared/header";

const ListItemLayout = ({ children }: ListItemLayoutProps) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};

export default ListItemLayout;
