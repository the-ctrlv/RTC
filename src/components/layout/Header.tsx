import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Services" },
    { path: "/careers", label: "Careers" },
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
      className={`
        top-0 left-0 right-0 z-50 fixed transition-all
        ${scrolled ? "bg-[#343434] backdrop-blur-0" : "backdrop-blur-lg bg-transparent"}
      `}
    >
      <nav className="container mx-auto py-3.5 lg:py-6 px-6">
        <div className="relative flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center z-[1000]"
            onClick={closeMobileMenu}
          >
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
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="min-w-6 min-h-6 text-black" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className="
              fixed top-0 left-0 w-[100vw] h-[100vh] bg-brand-dark z-[99] pb-10
              flex flex-col items-center gap-3
            "
          >
            <div className="w-full bg-[#343434] py-3.5 px-6">
              <Button
                onClick={closeMobileMenu}
                variant={"rounded"}
                className="bg-white w-12 h-12 float-end"
              >
                <X className="min-w-6 min-h-6 text-black" />
              </Button>
            </div>
            <div className="flex flex-col gap-4 pt-4">
              {/* Navigation Links */}
              <ul className="flex flex-col items-center gap-2 mb-auto">
                <li>
                  <Link
                    to="/"
                    onClick={closeMobileMenu}
                    className={`text-lg font-medium transition-colors hover:text-brand-lime ${
                      location.pathname === "/"
                        ? "text-brand-lime"
                        : "text-white"
                    }`}
                  >
                    Home
                  </Link>
                </li>
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      onClick={closeMobileMenu}
                      className={`text-lg font-medium transition-colors hover:text-brand-lime ${
                        isActive(item.path) ? "text-brand-lime" : "text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Divider Line */}
              <div className="w-full max-w-md mx-auto border-t border-gray-600 my-8"></div>

              {/* Contact Information */}
              <div className="px-8 space-y-4">
                {/* Call or Text Us */}
                <div className="text-center">
                  <p className="text-brand-lime text-sm font-bold uppercase tracking-wider mb-2">
                    CALL OR TEXT US
                  </p>
                  <a
                    href="tel:+17789807798"
                    className="text-white text-md hover:text-brand-lime transition-colors"
                  >
                    1(778)980-7798
                  </a>
                  <span className="text-white text-lg">, </span>
                  <a
                    href="tel:+16046574744"
                    className="text-white text-md hover:text-brand-lime transition-colors"
                  >
                    1(604)657-4744
                  </a>
                </div>

                {/* Email Us */}
                <div className="text-center">
                  <p className="text-brand-lime text-sm font-bold uppercase tracking-wider mb-2">
                    EMAIL US ANYTIME
                  </p>
                  <a
                    href="mailto:info.ropetechgroup@gmail.com"
                    className="text-white text-md hover:text-brand-lime transition-colors"
                  >
                    info.ropetechgroup@gmail.com
                  </a>
                </div>

                {/* Social Media Icons */}
                <div className="flex justify-center gap-6 pt-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-brand-lime transition-colors"
                  >
                    <svg className="w-6 h-6" fill="#0866FF" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com/ropetechgroup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-brand-lime transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="url(#instagram-gradient)"
                      viewBox="0 0 24 24"
                    >
                      <defs>
                        <linearGradient
                          id="instagram-gradient"
                          x1="0%"
                          y1="100%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop
                            offset="0%"
                            style={{ stopColor: "#FD5949", stopOpacity: 1 }}
                          />
                          <stop
                            offset="50%"
                            style={{ stopColor: "#D6249F", stopOpacity: 1 }}
                          />
                          <stop
                            offset="100%"
                            style={{ stopColor: "#285AEB", stopOpacity: 1 }}
                          />
                        </linearGradient>
                      </defs>
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-brand-lime transition-colors"
                  >
                    <svg className="w-6 h-6" fill="#0A66C2" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
