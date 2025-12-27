import { ContactForm } from "@/components/ContactForm";

const ContactUs = () => {
  return (
    <div className="min-h-screen mb-[-50vh] lg:mb-0">
      {/* Hero Section */}
      <section className="bg-brand-dark text-white pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24 h-[70vh] lg:h-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 lg:mb-10">Contact Us</h1>
          <img src="/decoration_line.svg" alt="Divider" className="h-[14px] w-auto" />
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 sm:py-16 lg:py-20 -translate-y-[50vh] lg:translate-y-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8 order-2 lg:order-1">
              <div>
                <h3 className="text-brand-lime3 font-bold mb-1 uppercase text-[14px] lg:text-lg tracking-wide">
                  EMAIL
                </h3>
                <a
                  href="mailto:info.ropetechgroup@gmail.com"
                  className="hover:text-brand-lime font-bold transition-colors text-base lg:text-lg block text-darkGray"
                >
                  info.ropetechgroup@gmail.com
                </a>
              </div>

              <div>
                <h3 className="text-brand-lime3 font-bold mb-1 uppercase text-[14px] lg:text-lg tracking-wide">
                  PHONE
                </h3>
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
                <h3 className="text-brand-lime3 font-bold mb-1 uppercase text-[14px] lg:text-lg tracking-wide">
                  LOCATION
                </h3>
                <p className="text-darkGray text-base lg:text-lg font-bold">
                  142B W 8th Ave, Vancouver, BC V6H 1E1
                </p>
              </div>

              <div>
                <h3 className="text-brand-lime3 font-bold mb-1 uppercase text-[14px] lg:text-lg tracking-wide">
                  INSTAGRAM
                </h3>
                <a
                  href="https://instagram.com/ropetechgroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-lime font-bold transition-colors text-base lg:text-lg block text-darkGray"
                >
                  ropetechgroup
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
