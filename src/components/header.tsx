"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FileText, LinkIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

enum route {
  verses = "/verses",
  contexts = "/contexts",
}

const Header = () => {
  const [currentRoute, setCurrentRoute] = useState(route.verses);

  const handleChangeRoute = (href: route) => {
    setCurrentRoute(href);
  };

  const currentRouteWhiteClass = (href: string) =>
    currentRoute === href ? "bg-white text-black" : "text-white bg-transparent";

  return (
    <div className="block px-3 py-5 bg-transparent rounded-lg">
      <div className="flex items-center gap-3">
        <Link href="/verses">
          <Button
            onClick={() => handleChangeRoute(route.verses)}
            className={cn(
              "flex items-center gap-2 backdrop-filter backdrop-blur-md border border-solid border-white rounded-lg hover:bg-white hover:text-black",
              currentRouteWhiteClass("/verses")
            )}
          >
            <FileText />
            <p className="whitespace-nowrap sm:inline hidden">Стихи</p>
          </Button>
        </Link>

        <Link href="/contexts">
          <Button
            onClick={() => handleChangeRoute(route.contexts)}
            className={cn(
              "flex items-center gap-2 backdrop-filter backdrop-blur-md border border-solid border-white rounded-lg hover:bg-white hover:text-black",
              currentRouteWhiteClass("/contexts")
            )}
          >
            <LinkIcon />
            <p className="whitespace-nowrap sm:inline hidden">Краткое содержание</p>
          </Button>
        </Link>
        <div className="w-full flex items-end justify-end">
          <SidebarTrigger className="bg-white z-20" />
        </div>
      </div>
    </div>
  );
};

export default Header;
