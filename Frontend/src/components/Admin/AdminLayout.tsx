import { ReactNode } from "react";
import Sidebar from "./Slidebar";
import Header from "./Header";

type Props = {
  children: ReactNode;
};

export default function AdminLayout({ children }: Props) {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}
