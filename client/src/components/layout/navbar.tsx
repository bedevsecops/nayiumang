import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/donate", label: "Donate" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/volunteer-registration", label: "Registration" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-3 cursor-pointer" data-testid="link-home-logo">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-sm"></div>
              </div>
              <span className="text-xl font-bold text-gray-900">Nayiumang</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <span className="text-gray-900 hover:text-orange-500 transition-colors cursor-pointer font-medium">
                    {item.label}
                  </span>
                </Link>
              ))}
              <Link href="/donate">
                <Button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                  Donate Now
                </Button>
              </Link>
            </div>
          )}

          {/* Mobile Navigation */}
          {isMobile && (
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link key={item.href} href={item.href} onClick={handleNavClick}>
                      <span className="text-gray-900 hover:text-orange-500 transition-colors cursor-pointer font-medium block py-2">
                        {item.label}
                      </span>
                    </Link>
                  ))}
                  <div className="pt-4">
                    <Link href="/donate" onClick={handleNavClick}>
                      <Button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors">
                        Donate Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </nav>
  );
}
