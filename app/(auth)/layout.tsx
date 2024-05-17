interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <main className="h-full w-full flex items-center justify-center">
      {children}
    </main>
  );
};

export default AuthLayout;
