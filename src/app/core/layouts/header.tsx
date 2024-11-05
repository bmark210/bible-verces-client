"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import { NavActions } from "../../../components/nav-actions";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FileText, LinkIcon } from "lucide-react";

const Header = () => {
  return (
    <div className="block p-3 bg-transparent rounded-lg">
      <SidebarProvider className="w-full justify-between">
        <div className="w-full flex gap-3">
          <Link href="/verses">
            <Button className="flex items-center gap-2 bg-transparent  backdrop-filter backdrop-blur-md border border-solid border-white rounded-lg hover:bg-white hover:text-black">
              <FileText />
              <p>Verses</p>
            </Button>
          </Link>

          <Link href="/contexts">
            <Button className="flex items-center gap-2 bg-transparent  backdrop-filter backdrop-blur-md border border-solid border-white rounded-lg hover:bg-white hover:text-black">
              <LinkIcon />
              <p>Contexts</p>
            </Button>
          </Link>
        </div>
        <NavActions />
      </SidebarProvider>
      {/* <div className="w-full block">
        <div className="ml-auto px-3">
          sdcdscds
        </div> */}

      {/* <button className="flex items-center gap-5 p-3 border border-white rounded-lg border-solid  backdrop-filter backdrop-blur-sm">
          <p className="text-white text-2xl">Create new verse</p>
          <Image src="icons/create_new.svg" alt="plus" width={20} height={20} />
        </button> */}
      {/* </div> */}
    </div>
  );
};

export default Header;
