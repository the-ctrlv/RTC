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
    console.log("Form submitted:", data);
    alert("Thank you for contacting us! We will get back to you soon.");
    reset();
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-dark text-white pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
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
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8 sm:space-y-10">
              <div>
                <h3 className="text-brand-lime font-semibold mb-3 uppercase text-sm tracking-wide">
                  EMAIL
                </h3>
                <a
                  href="mailto:info.ropetechgroup@gmail.com"
                  className="text-gray-900 hover:text-brand-lime transition-colors text-lg block"
                >
                  info.ropetechgroup@gmail.com
                </a>
              </div>

              <div>
                <h3 className="text-brand-lime font-semibold mb-3 uppercase text-sm tracking-wide">
                  PHONE
                </h3>
                <div className="text-gray-900 text-lg space-y-1">
                  <div>
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
              </div>

              <div>
                <h3 className="text-brand-lime font-semibold mb-3 uppercase text-sm tracking-wide">
                  LOCATION
                </h3>
                <p className="text-gray-900 text-lg">
                  142B W 8th Ave, Vancouver, BC V6H 1E1
                </p>
              </div>

              <div>
                <h3 className="text-brand-lime font-semibold mb-3 uppercase text-sm tracking-wide">
                  INSTAGRAM
                </h3>
                <a
                  href="https://instagram.com/ropetechgroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-brand-lime transition-colors text-lg"
                >
                  ropetechgroup
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-6 sm:p-8 lg:p-10 rounded-lg">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
                Fill Out the Form
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name", { required: "Name is required" })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-lime focus:border-transparent outline-none transition-all"
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
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your e-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", { required: "Email is required" })}
                    placeholder="olivia@untitledui.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-lime focus:border-transparent outline-none transition-all"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    {...register("message")}
                    placeholder="Type something..."
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-lime focus:border-transparent outline-none transition-all resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-brand-lime hover:bg-brand-lime/90 text-gray-900 font-semibold py-6 text-base"
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
