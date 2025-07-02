import { Button } from "@/components/ui/button";
import { Bell, Grid } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const HeaderMain = () => {
  return (
    <header className="flex justify-around w-full h-14 border-b-2 border-[#221E40] px-6 py-4">
      <div className="w-96">
        <div className="relative flex items-center gap-4 text-[#9177F2]">
          <Link href="/">HOME</Link>
          <DropdownMenu>
            <DropdownMenuTrigger>KONWERTERS</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Unit Types</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/length">Length</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/mass">Mass</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/pressure">Pressure</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/time">Time</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/energy">Energy</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/power">Power</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/volume">Volume</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/surface">Surface</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/speed">Speed</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      {/* <div className="flex items-start gap-4">
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
        </div> */}
      {/* </div> */}
    </header>
  );
};

export default HeaderMain;
