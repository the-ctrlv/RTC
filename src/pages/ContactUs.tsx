import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    // eslint-disable-next-line no-console
    console.log("Form submitted:", data);
    alert("Thank you for contacting us! We will get back to you soon.");
    reset();
  };

  return (
    <div className="min-h-screen mb-[-50vh] lg:mb-0">
      {/* Hero Section */}
      <section className="bg-brand-dark text-white pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24 h-[70vh] lg:h-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 lg:mb-10">
            Contact Us
          </h1>
          <img
            src="/decoration_line.svg"
            alt="Divider"
            className="h-[14px] w-auto"
          />
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
            <div className="bg-white p-7 sm:p-8 lg:p-10 rounded-[40px] order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8">
                Fill Out the Form
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-base font-semibold text-gray-700 mb-2"
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name", { required: "Name is required" })}
                    placeholder="Enter your name"
                    className="bg-white placeholder:font-semibold placeholder:text-[#9D9D9D] w-full h-12 px-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-lime focus:border-transparent outline-none transition-all"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-base font-semibold text-gray-700 mb-2"
                  >
                    Your e-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", { required: "Email is required" })}
                    placeholder="olivia@untitledui.com"
                    className="bg-white placeholder:font-semibold placeholder:text-[#9D9D9D] w-full h-12 px-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-lime focus:border-transparent outline-none transition-all rounded-[8px]"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="mb-10">
                  <label
                    htmlFor="message"
                    className="block text-base font-semibold text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    {...register("message")}
                    placeholder="Type something..."
                    rows={4}
                    className="bg-white placeholder:font-semibold placeholder:text-[#9D9D9D] w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-lime focus:border-transparent outline-none transition-all resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-brand-lime hover:bg-brand-lime/90 text-gray-900 font-bold py-6 text-base"
                >
                  Send
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
