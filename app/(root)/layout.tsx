interface RootLayoutProps {
  children: React.ReactNode;
}

// Components
import { Header } from "../../components/shared/header";
import { Sidebar } from "./_components/sidebar";

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <main className="h-full">
      <Header />
      <div className="flex flex-row h-full">
        <Sidebar />
        {children}
      </div>
    </main>
  );
};

export default RootLayout;
