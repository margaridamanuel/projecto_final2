import { ReactNode } from "react";
import Sidebar from "./SlidebarProprietario";
import Header from "./headerProprietario";

type Props = {
  children: ReactNode;
};

export default function ProprietarioLayout({ children }: Props) {
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
