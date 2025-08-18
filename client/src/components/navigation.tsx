import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Heart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-ngo-blue rounded-full flex items-center justify-center">
              <Heart className="text-white text-lg" size={20} />
            </div>
            <span className="text-xl font-bold text-gray-900">Hope Foundation</span>
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/">
                <Button
                  variant="ghost"
                  className={`px-3 py-2 text-sm font-medium ${
                    isActive("/")
                      ? "text-ngo-blue border-b-2 border-ngo-blue"
                      : "text-gray-600 hover:text-ngo-blue"
                  }`}
                >
                  Home
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="ghost"
                  className={`px-3 py-2 text-sm font-medium ${
                    isActive("/about")
                      ? "text-ngo-blue border-b-2 border-ngo-blue"
                      : "text-gray-600 hover:text-ngo-blue"
                  }`}
                >
                  About Us
                </Button>
              </Link>
              <Link href="/register">
                <Button
                  variant="ghost"
                  className={`px-3 py-2 text-sm font-medium ${
                    isActive("/register")
                      ? "text-ngo-blue border-b-2 border-ngo-blue"
                      : "text-gray-600 hover:text-ngo-blue"
                  }`}
                >
                  Register
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-ngo-blue"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
              <Button
                variant="ghost"
                className={`block w-full text-left px-3 py-2 text-base font-medium ${
                  isActive("/")
                    ? "text-ngo-blue bg-blue-50"
                    : "text-gray-600 hover:text-ngo-blue"
                }`}
              >
                Home
              </Button>
            </Link>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>
              <Button
                variant="ghost"
                className={`block w-full text-left px-3 py-2 text-base font-medium ${
                  isActive("/about")
                    ? "text-ngo-blue bg-blue-50"
                    : "text-gray-600 hover:text-ngo-blue"
                }`}
              >
                About Us
              </Button>
            </Link>
            <Link href="/register" onClick={() => setIsMobileMenuOpen(false)}>
              <Button
                variant="ghost"
                className={`block w-full text-left px-3 py-2 text-base font-medium ${
                  isActive("/register")
                    ? "text-ngo-blue bg-blue-50"
                    : "text-gray-600 hover:text-ngo-blue"
                }`}
              >
                Register
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
