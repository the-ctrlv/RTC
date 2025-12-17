import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { path: "/overview", label: "Overview" },
    { path: "/features", label: "Features" },
    { path: "/solutions", label: "Solutions" },
    { path: "/tutorials", label: "Tutorials" },
    { path: "/pricing", label: "Pricing" },
    { path: "/releases", label: "Releases" },
  ];

  const services = [
    { path: "/about", label: "About us" },
    { path: "/careers", label: "Careers" },
    { path: "/press", label: "Press" },
    { path: "/news", label: "News" },
    { path: "/media-kit", label: "Media kit" },
    { path: "/contact", label: "Contact" },
  ];

  const industries = [
    { path: "/blog", label: "Blog" },
    { path: "/newsletter", label: "Newsletter" },
    { path: "/events", label: "Events" },
    { path: "/help-centre", label: "Help centre" },
    { path: "/tutorials", label: "Tutorials" },
    { path: "/support", label: "Support" },
  ];

  return (
    <footer className="bg-[#2D2D2D] text-white">
      <div className="container mx-auto px-7 sm:px-6 py-10 sm:py-12 lg:py-16">
        {/* Mobile/Tablet Layout - Single Column */}
        <div className="lg:hidden space-y-8">
          {/* Logo and Contact Info */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <img src="/logo.svg" alt="RTC Logo" className="w-[138px]" />
            </Link>

            <div className="space-y-5">
              <div>
                <h4 className="text-brand-lime font-semibold mb-2 uppercase text-xs tracking-wide">
                  EMAIL
                </h4>
                <a
                  href="mailto:info.ropetechgroup@gmail.com"
                  className="text-white hover:text-brand-lime transition-colors text-sm block"
                >
                  info.ropetechgroup@gmail.com
                </a>
              </div>

              <div>
                <h4 className="text-brand-lime font-semibold mb-2 uppercase text-xs tracking-wide">
                  PHONE
                </h4>
                <div className="text-white text-sm">
                  <a
                    href="tel:+17789807798"
                    className="hover:text-brand-lime transition-colors"
                  >
                    1(778)980-7798
                  </a>
                  ,{" "}
                  <a
                    href="tel:+16046574744"
                    className="hover:text-brand-lime transition-colors"
                  >
                    1(604)657-4744
                  </a>
                </div>
              </div>

              {/* <div>
                <h4 className="text-brand-lime font-semibold mb-2 uppercase text-xs tracking-wide">
                  INSTAGRAM
                </h4>
                <a
                  href="https://instagram.com/ropetechgroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-brand-lime transition-colors text-sm"
                >
                  ropetechgroup
                </a>
              </div> */}
            </div>
          </div>

          {/* Links Sections - 2 Columns on Mobile */}
          <div className="grid grid-cols-2 gap-8 pt-4">
            {/* Quick Links & Services */}
            <div className="space-y-8">
              <div>
                <h3 className="text-brand-lime font-bold mb-4 uppercase text-xs tracking-wide">
                  QUICK LINKS
                </h3>
                <ul className="space-y-2.5">
                  {quickLinks.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="text-white hover:text-brand-lime transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-brand-lime font-bold mb-4 uppercase text-xs tracking-wide">
                  SERVICES
                </h3>
                <ul className="space-y-2.5">
                  {services.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="text-white hover:text-brand-lime transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Industries - Full Width */}
          <div>
            <h3 className="text-brand-lime font-bold mb-4 uppercase text-xs tracking-wide">
              INDUSTRIES
            </h3>
            <ul className="space-y-2.5">
              {industries.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white hover:text-brand-lime transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Desktop Layout - 4 Columns */}
        <div className="hidden lg:grid grid-cols-4 gap-12">
          {/* Logo and Contact Info */}
          <div>
            <Link to="/" className="inline-block mb-8">
              <img src="/logo.svg" alt="RTC Logo" className="w-[87px]" />
            </Link>

            <div className="space-y-6">
              <div>
                <h4 className="text-brand-lime font-semibold mb-2 uppercase text-sm tracking-wide">
                  EMAIL
                </h4>
                <a
                  href="mailto:info.ropetechgroup@gmail.com"
                  className="text-white hover:text-brand-lime transition-colors text-sm"
                >
                  info.ropetechgroup@gmail.com
                </a>
              </div>

              <div>
                <h4 className="text-brand-lime font-semibold mb-2 uppercase text-sm tracking-wide">
                  PHONE
                </h4>
                <div className="text-white text-sm">
                  <a
                    href="tel:+17789807798"
                    className="hover:text-brand-lime transition-colors"
                  >
                    1(778)980-7798
                  </a>
                  ,{" "}
                  <a
                    href="tel:+16046574744"
                    className="hover:text-brand-lime transition-colors"
                  >
                    1(604)657-4744
                  </a>
                </div>
              </div>

              {/* <div>
                <h4 className="text-brand-lime font-semibold mb-2 uppercase text-sm tracking-wide">
                  INSTAGRAM
                </h4>
                <a
                  href="https://instagram.com/ropetechgroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-brand-lime transition-colors text-sm"
                >
                  ropetechgroup
                </a>
              </div> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-brand-lime font-bold mb-6 uppercase text-sm tracking-wide">
              QUICK LINKS
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white hover:text-brand-lime transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-brand-lime font-bold mb-6 uppercase text-sm tracking-wide">
              SERVICES
            </h3>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white hover:text-brand-lime transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-brand-lime font-bold mb-6 uppercase text-sm tracking-wide">
              INDUSTRIES
            </h3>
            <ul className="space-y-3">
              {industries.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white hover:text-brand-lime transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 py-5 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm">
            <p className="text-gray-400 text-center sm:text-left">
              © {new Date().getFullYear()} All Rights Reserved Rope Tech Group
            </p>
            <div className="flex gap-6 sm:gap-8">
              <Link
                to="/terms"
                className="text-gray-400 hover:text-brand-lime transition-colors underline"
              >
                Terms of use
              </Link>
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-brand-lime transition-colors underline"
              >
                Privacy policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
