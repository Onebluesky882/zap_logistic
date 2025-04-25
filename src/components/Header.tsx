import useGuard from "@/hooks/useGuard";
import { useEffect } from "react";
import { FaUserShield } from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router";

const Header = () => {
  const { user, Guard, signOut } = useGuard();

  useEffect(() => {
    Guard();
  }, []);
  return (
    <header className="bg-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-600">
          ​ <a href="/"> Zap logistic</a>
        </div>

        {/* Navigation */}
        <nav className="space-x-6 hidden md:flex text-sm text-gray-700 items-center">
          <a href="/" className="hover:text-blue-600 transition">
            Home
          </a>
          <a href="/product-table" className="hover:text-blue-600 transition">
            Products{" "}
          </a>{" "}
          <a href="/form-stock-in" className="hover:text-blue-600 transition">
            stock-in{" "}
          </a>
          <a href="/dashboard" className="hover:text-blue-600 transition">
            Dashboard
          </a>{" "}
          <a href="/contact" className="hover:text-blue-600 transition">
            Contact
          </a>
          {user ? (
            <>
              <Link to={"/"} />
              <Dropdown onClick={signOut} userName={user.email} />
            </>
          ) : (
            <a
              href="/login"
              className="rounded-full border-blue-400 p-2 border-2 hover:bg-blue-100 transition"
            >
              <FaUserShield />
            </a>
          )}
        </nav>

        {/* Optional: Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-gray-700 hover:text-blue-600">☰</button>
        </div>
      </div>
    </header>
  );
};

export function Dropdown({ onClick, userName }: any) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{userName}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Keyboard shortcuts
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={onClick}>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Header;
