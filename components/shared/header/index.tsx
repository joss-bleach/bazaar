import Link from "next/link";
import Image from "next/image";
import { Plus } from "lucide-react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

// Components
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Header = () => {
  return (
    <header className="bg-white border-b-[1px] border-border w-full">
      <nav className="max-w-7xl px-4 md:px-0 mx-auto h-[80px] flex flex-row items-center justify-between">
        <Link aria-label="Home" href="/">
          <Image
            src="/SVG/bazaar-logo-horizontal.svg"
            alt="Bazaar logo"
            height={50}
            width={150}
          />
        </Link>
        <ul className="flex flex-row items-center gap-3">
          <li>
            <Link href="/list-item">
              <Button variant="ghost" className="flex flex-row items-center">
                <Plus size={16} className="mr-1" /> <span>Post an ad</span>
              </Button>
            </Link>
          </li>
          <li>
            <span className="border-r-[1px] border-border px-2" />
          </li>
          <SignedOut>
            <li>
              <Link href="/sign-up">
                <Button variant="ghost" className="flex flex-row items-center">
                  Sign up
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/sign-in">
                <Button className="flex flex-row items-center">Sign in</Button>
              </Link>
            </li>
          </SignedOut>
          <SignedIn>
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost">My profile</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href="/profile/selling">Selling</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/profile/purchases">Purchases</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/profile/settings">Account settings</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li className="h-full flex items-center pl-[16px]">
              <UserButton afterSignOutUrl="/" />
            </li>
          </SignedIn>
        </ul>
      </nav>
    </header>
  );
};
