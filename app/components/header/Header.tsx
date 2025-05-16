import React from "react";
import { Button } from "@/components/ui/button";
import { Bell, Grid } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between border-b px-6 py-4">
      <div className="w-96">
        <div className="relative">
          <Link href="/">HOME</Link>
          <div className="absolute inset-0 h-[2px] w-full bg-blue-500 transition-all duration-300 group-hover:w-full" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <Grid className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <Bell className="h-4 w-4" />
        </Button>
        <div className="h-8 w-8 overflow-hidden rounded-full">
          <Image
            src="/placeholder.svg"
            alt="Avatar"
            width={32}
            height={32}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
