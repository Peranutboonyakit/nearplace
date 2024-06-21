import { ReactNode } from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar";

interface Props {
  children: ReactNode;
}

const Layout = (props: Props) => {
  return (
    <div className="flex flex-col w-screen h-screen">
      <Sidebar />
      <Navbar />

      <div className="md:pl-[90px] py-[60px] h-full bg-[#F5F6F8] overflow-hidden">
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
