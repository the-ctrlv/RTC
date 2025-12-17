import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Services" },
    { path: "/industries", label: "Industries" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`backdrop-blur-lg ${
        isHomePage
          ? "absolute top-0 left-0 right-0 z-50 bg-transparent"
          : "sticky top-0 z-50 bg-gray-900 shadow-lg"
      }`}
    >
      <nav className="container mx-auto py-3.5 lg:py-6 px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center" onClick={closeMobileMenu}>
            <img src="/logo.svg" alt="RTC Logo" className="w-[87px]" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`text-md font-medium transition-colors hover:text-brand-lime ${
                      isActive(item.path) ? "text-brand-lime" : "text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-brand-lime hover:bg-brand-lime/90 text-black font-semibold"
              >
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden w-12 h-12 bg-brand-lime rounded-full flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="min-w-6 min-h-6 text-black" />
            ) : (
              <Menu className="min-w-6 min-h-6 text-black" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-[88px] bg-gray-900 z-40">
            <div className="flex flex-col h-full">
              <ul className="flex flex-col p-6 space-y-6">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      onClick={closeMobileMenu}
                      className={`text-lg font-medium transition-colors hover:text-brand-lime block ${
                        isActive(item.path) ? "text-brand-lime" : "text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-auto p-6">
                <Link to="/contact" onClick={closeMobileMenu}>
                  <Button
                    size="lg"
                    className="w-full bg-brand-lime hover:bg-brand-lime/90 text-black font-semibold"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
