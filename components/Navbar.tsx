import React from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { UserButton } from "@clerk/nextjs/app-beta";
import MobileSidebar from "./MobileSidebar";

const Navbar = () => {
  return (
    <div className="flex items-center p-4">
      <MobileSidebar />
      <div className="w-full flex justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
