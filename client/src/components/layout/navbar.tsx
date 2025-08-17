import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" }
];

export default function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-sm shadow-lg" 
            : "bg-white/95 backdrop-blur-sm shadow-sm"
        }`}
        data-testid="navigation-main"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center space-x-3 cursor-pointer" data-testid="link-home-logo">
                <div className="w-10 h-10 bg-forest rounded-full flex items-center justify-center">
                  <Heart className="text-white h-5 w-5" />
                </div>
                <span className="text-xl font-bold text-dark-slate">Hope Foundation</span>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <button 
                    className={`text-dark-slate hover:text-forest transition-colors font-medium ${
                      location === item.href ? "text-forest" : ""
                    }`}
                    data-testid={`nav-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {item.label}
                  </button>
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <Link href="/donate">
                <Button 
                  className="bg-warm-orange text-white px-6 py-2 rounded-full font-medium hover:bg-orange-500 transition-colors"
                  data-testid="button-donate-nav"
                >
                  Donate Now
                </Button>
              </Link>
              
              {/* Mobile Menu Toggle */}
              <button 
                className="md:hidden text-dark-slate hover:text-forest transition-colors"
                onClick={toggleMobileMenu}
                data-testid="button-mobile-menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div 
                className="md:hidden mt-4 pb-4 border-t pt-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                data-testid="mobile-menu"
              >
                <div className="flex flex-col space-y-3">
                  {navItems.map((item) => (
                    <Link key={item.href} href={item.href}>
                      <button 
                        className={`text-dark-slate hover:text-forest transition-colors font-medium w-full text-left py-2 ${
                          location === item.href ? "text-forest" : ""
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        data-testid={`mobile-nav-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        {item.label}
                      </button>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Mobile menu backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/20 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
