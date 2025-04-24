import { PropsWithChildren } from "react";
import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen flex flex-col ">
      <Header />
      <main className="flex-1 overflow-x-hidden sticky top-0 px-8  outline-red-200">
        {children}
      </main>
      <Footer />
    </div>
  );
};
export default Layout;
