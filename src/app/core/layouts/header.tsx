"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
// import {
//   ArrowDown,
//   ArrowUp,
//   Bell,
//   Copy,
//   CornerUpLeft,
//   CornerUpRight,
//   FileText,
//   GalleryVerticalEnd,
//   LineChart,
//   Link,
//   PenLine,
//   Trash,
//   Trash2,
// } from "lucide-react";
import { NavActions } from "../../../components/nav-actions";



const Header = () => {
  return (
    <div className="block p-5">
      <SidebarProvider>
        <NavActions />
      </SidebarProvider>
      <div className="w-full block">
        <div className="ml-auto px-3"></div>

        {/* <button className="flex items-center gap-5 p-3 border border-white rounded-lg border-solid  backdrop-filter backdrop-blur-sm">
          <p className="text-white text-2xl">Create new verse</p>
          <Image src="icons/create_new.svg" alt="plus" width={20} height={20} />
        </button> */}
      </div>
    </div>
  );
};

export default Header;
