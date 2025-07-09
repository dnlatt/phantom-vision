
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose,
  } from "@/components/ui/sheet";
  
  import { X } from "lucide-react"; // for close icon (optional)
  
  export function MobileNavSheet({ navItems }: { navItems: { label: string; href: string }[] }) {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <button aria-label="Open menu">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </SheetTrigger>
  
        <SheetContent side="right" className="bg-[#201328] text-white px-6 pt-10 w-72">
          <SheetHeader className="flex items-center justify-between mb-6">
            <SheetTitle className="text-xl font-bold">Menu</SheetTitle>
          </SheetHeader>
  
          <ul className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="block text-lg font-semibold hover:text-[#DF308D] transition duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <Button className="cta-button">
                Sign Up
            </Button>
        </SheetContent>
      </Sheet>
    );
  }
  