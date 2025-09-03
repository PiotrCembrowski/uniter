import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="flex items-center justify-between border-b border-[#4F3E8C] px-6 py-4 text-[#9177F2]">
      <div className="w-96">
        <div className="relative flex ite ms-center gap-4">
          <Button className="bg-transparent text-[#9177F2]">
            <Link href="/">HOME</Link>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger>CONVERTERS</DropdownMenuTrigger>
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
          <Tooltip>
            <TooltipTrigger asChild>
              <Button className="bg-transparent hover:bg-transparent text-[#9177F2]">
                <a href="mailto:losttape@gmail.com">CONTACT</a>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <a href="mailto:losttape@gmail.com">losttape@gmail.com</a>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
      {/* <div className="flex items-center gap-4">
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
      </div> */}
    </header>
  );
};

export default Header;
