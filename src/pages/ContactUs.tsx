import { ContactForm } from "@/components/ContactForm";
import SEO from "@/components/SEO";

const ContactUs = () => {
  return (
    <div className="min-h-screen mb-[-50vh] lg:mb-0">
      <SEO
        title="Contact Us"
        description="Get in touch with Rope Tech Group for professional rope access services in Vancouver and across Canada. Request a quote or consultation for your industrial or building project."
        keywords="contact rope access, Vancouver rope access, get quote, consultation, rope access inquiry, industrial services contact"
      />
      {/* Hero Section */}
      <section className="bg-brand-dark text-white pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24 h-[70vh] lg:h-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-14">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 lg:mb-10">
            Contact Us
          </h1>
          <img
            src="/decoration_line.svg"
            alt="Decorative divider"
            className="h-[14px] w-auto"
          />
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 sm:py-16 lg:py-20 -translate-y-[45vh] lg:translate-y-0 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-14">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8 order-2 lg:order-1">
              <div>
                <h2 className="text-brand-lime3 font-bold mb-1 uppercase text-[14px] lg:text-lg tracking-wide">
                  EMAIL
                </h2>
                <a
                  href="mailto:info.ropetechgroup@gmail.com"
                  className="hover:text-brand-lime font-bold transition-colors text-base lg:text-lg block text-darkGray"
                >
                  info.ropetechgroup@gmail.com
                </a>
              </div>

              <div>
                <h2 className="text-brand-lime3 font-bold mb-1 uppercase text-[14px] lg:text-lg tracking-wide">
                  PHONE
                </h2>
                <div className="text-gray-900 text-lg space-y-1">
                  <div>
                    <a
                      href="tel:+17789807798"
                      className="hover:text-brand-lime font-bold transition-colors text-base lg:text-lg inline-block text-darkGray"
                    >
                      1(778)980-7798
                    </a>
                    ,{" "}
                    <a
                      href="tel:+16046574744"
                      className="hover:text-brand-lime font-bold transition-colors text-base lg:text-lg inline-block text-darkGray"
                    >
                      1(604)657-4744
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-brand-lime3 font-bold mb-1 uppercase text-[14px] lg:text-lg tracking-wide">
                  LOCATION
                </h2>
                <p className="text-darkGray text-base lg:text-lg font-bold">
                  142B W 8th Ave, Vancouver, BC V6H 1E1
                </p>
              </div>

              <div className="flex justify-start gap-6">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/share/1FaCR8U6RY/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#c3d533] transition-colors"
                >
                  <svg className="w-6 h-6" fill="#0866FF" viewBox="0 0 24 24">
                    {" "}
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />{" "}
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/ropetechgroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#c3d533] transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="url(#instagram-gradient)"
                    viewBox="0 0 24 24"
                  >
                    {" "}
                    <defs>
                      {" "}
                      <linearGradient
                        id="instagram-gradient"
                        x1="0%"
                        y1="100%"
                        x2="100%"
                        y2="0%"
                      >
                        {" "}
                        <stop
                          offset="0%"
                          style={{ stopColor: "#FD5949", stopOpacity: 1 }}
                        />{" "}
                        <stop
                          offset="50%"
                          style={{ stopColor: "#D6249F", stopOpacity: 1 }}
                        />{" "}
                        <stop
                          offset="100%"
                          style={{ stopColor: "#285AEB", stopOpacity: 1 }}
                        />{" "}
                      </linearGradient>{" "}
                    </defs>{" "}
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />{" "}
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#c3d533] transition-colors"
                >
                  <svg className="w-6 h-6" fill="#0A66C2" viewBox="0 0 24 24">
                    {" "}
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />{" "}
                  </svg>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
