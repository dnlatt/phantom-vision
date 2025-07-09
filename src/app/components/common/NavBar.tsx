import { Button } from "@/components/ui/button";
import { navItems } from "@/constant";
import { RectangleGoggles } from "lucide-react";
import { MobileNavSheet } from "./MobileNavSheet";

export const NavBar = () => {
  return (
    <>
    <nav className="container mx-auto px-4 py-6 flex justify-between items-center z-10 relative max-container">
        <div className="font-bold text-white flex gap-2"> <RectangleGoggles className="w-6 h-6 text-white" /> PHANTOM VISION</div>
        <ul className="hidden md:flex space-x-8">
            {navItems.map((item) => (
                <li key={item.label}>
                <a href={item.href} className="nav-bar">
                    {item.label}
                </a>
                </li>
            ))}
        </ul>
        <div className="hidden md:block">
            <Button className="cta-button">
                Sign Up
            </Button>
        </div>
        <div className="md:hidden">
            <MobileNavSheet navItems={navItems}/>
        </div>
      </nav>
    </>
  )
}
