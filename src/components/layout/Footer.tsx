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
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Contact Info */}
          <div>
            <Link to="/" className="flex items-center mb-8">
              <div className="text-white">
                <div className="text-3xl font-bold tracking-tight">RTC</div>
                <div className="text-xs uppercase tracking-wider text-gray-400">
                  Rope Tech Group
                </div>
              </div>
            </Link>

            <div className="space-y-4">
              <div>
                <h4 className="text-lime-400 font-semibold mb-2 uppercase text-sm">
                  EMAIL
                </h4>
                <a
                  href="mailto:info.ropetechgroup@gmail.com"
                  className="text-gray-300 hover:text-lime-400 transition-colors"
                >
                  info.ropetechgroup@gmail.com
                </a>
              </div>

              <div>
                <h4 className="text-lime-400 font-semibold mb-2 uppercase text-sm">
                  PHONE
                </h4>
                <div className="text-gray-300">
                  <a
                    href="tel:+17789807798"
                    className="hover:text-lime-400 transition-colors"
                  >
                    1(778)980-7798
                  </a>
                  ,{" "}
                  <a
                    href="tel:+16046574744"
                    className="hover:text-lime-400 transition-colors"
                  >
                    1(604)657-4744
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lime-400 font-semibold mb-6 uppercase text-sm">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-lime-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lime-400 font-semibold mb-6 uppercase text-sm">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-lime-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-lime-400 font-semibold mb-6 uppercase text-sm">
              Industries
            </h3>
            <ul className="space-y-3">
              {industries.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-lime-400 transition-colors"
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
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} All Rights Reserved Rope Tech Group
            </p>
            <div className="flex gap-8">
              <Link
                to="/terms"
                className="text-gray-400 hover:text-lime-400 transition-colors text-sm underline"
              >
                Terms of use
              </Link>
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-lime-400 transition-colors text-sm underline"
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
