import React from "react";
import { Leaf } from "lucide-react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 text-primary">
          <Leaf className="h-6 w-6" />
          <span className="text-xl font-bold">GreenNest</span>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            Home
          </Link>
          <Link
            to="/plants"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            Plants
          </Link>
          <Link
            to="/profile"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            My Profile
          </Link>

          <div className="flex items-center gap-2">
            <button className="px-4 py-1.5 rounded-md border text-sm hover:bg-gray-50">
              Login
            </button>
            <button className="px-4 py-1.5 rounded-md bg-primary text-white text-sm hover:bg-primary/90">
              Register
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
