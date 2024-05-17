interface RootLayoutProps {
  children: React.ReactNode;
}

// Components
import { Header } from "../../components/shared/header";

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};

export default RootLayout;
