import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactSection = () => {
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
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F5F5F5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Layout - Single Column */}
        <div className="lg:hidden space-y-8">
          {/* Contact Information */}
          <div className="bg-[#F5F5F5] py-6">
            <h3 className="text-brand-lime font-bold mb-2 uppercase text-xs tracking-wider">
              CONTACT US
            </h3>
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Get in Touch
            </h2>

            <div className="space-y-6">
              <div>
                <h4 className="text-brand-lime font-bold mb-2 uppercase text-xs tracking-wider">
                  EMAIL
                </h4>
                <a
                  href="mailto:info.ropetechgroup@gmail.com"
                  className="text-gray-900 hover:text-brand-lime transition-colors text-sm block"
                >
                  info.ropetechgroup@gmail.com
                </a>
              </div>

              <div>
                <h4 className="text-brand-lime font-bold mb-2 uppercase text-xs tracking-wider">
                  PHONE
                </h4>
                <div className="text-gray-900 text-sm">
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

              <div>
                <h4 className="text-brand-lime font-bold mb-2 uppercase text-xs tracking-wider">
                  LOCATION
                </h4>
                <p className="text-gray-900 text-sm">
                  142B W 8th Ave,Vancouver, BC V6H 1E1
                </p>
              </div>

              <div>
                <h4 className="text-brand-lime font-bold mb-2 uppercase text-xs tracking-wider">
                  INSTAGRAM
                </h4>
                <a
                  href="https://instagram.com/ropetechgroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-brand-lime transition-colors text-sm"
                >
                  ropetechgroup
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              Fill Out the Form
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <label
                  htmlFor="name-mobile"
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="name-mobile"
                  {...register("name", { required: "Name is required" })}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-lime focus:border-transparent outline-none transition-all bg-white text-sm"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email-mobile"
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  Your e-mail
                </label>
                <input
                  type="email"
                  id="email-mobile"
                  {...register("email", { required: "Email is required" })}
                  placeholder="olivia@untitledui.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-lime focus:border-transparent outline-none transition-all bg-white text-sm"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message-mobile"
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message-mobile"
                  {...register("message")}
                  placeholder="Type something..."
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-lime focus:border-transparent outline-none transition-all resize-none bg-white text-sm"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-brand-lime hover:bg-brand-lime/90 text-gray-900 font-semibold py-5 text-base rounded-lg"
              >
                Send
              </Button>
            </form>
          </div>
        </div>

        {/* Desktop Layout - Two Columns */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="border-2 border-dashed border-blue-400 p-12 bg-white">
            <h3 className="text-brand-lime font-bold mb-2 uppercase text-xs tracking-wider">
              CONTACT US
            </h3>
            <h2 className="text-4xl font-bold mb-12 text-gray-900">
              Get in Touch
            </h2>

            <div className="space-y-8">
              <div>
                <h4 className="text-brand-lime font-bold mb-2 uppercase text-xs tracking-wider">
                  EMAIL
                </h4>
                <a
                  href="mailto:info.ropetechgroup@gmail.com"
                  className="text-gray-900 hover:text-brand-lime transition-colors text-base block"
                >
                  info.ropetechgroup@gmail.com
                </a>
              </div>

              <div>
                <h4 className="text-brand-lime font-bold mb-2 uppercase text-xs tracking-wider">
                  PHONE
                </h4>
                <div className="text-gray-900 text-base">
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

              <div>
                <h4 className="text-brand-lime font-bold mb-2 uppercase text-xs tracking-wider">
                  LOCATION
                </h4>
                <p className="text-gray-900 text-base">
                  142B W 8th Ave,Vancouver, BC V6H 1E1
                </p>
              </div>

              <div>
                <h4 className="text-brand-lime font-bold mb-2 uppercase text-xs tracking-wider">
                  INSTAGRAM
                </h4>
                <a
                  href="https://instagram.com/ropetechgroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-brand-lime transition-colors text-base"
                >
                  ropetechgroup
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="border-2 border-dashed border-blue-400 p-12 bg-white">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Fill Out the Form
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label
                  htmlFor="name-desktop"
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="name-desktop"
                  {...register("name", { required: "Name is required" })}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-lime focus:border-transparent outline-none transition-all bg-white"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email-desktop"
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  Your e-mail
                </label>
                <input
                  type="email"
                  id="email-desktop"
                  {...register("email", { required: "Email is required" })}
                  placeholder="olivia@untitledui.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-lime focus:border-transparent outline-none transition-all bg-white"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message-desktop"
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message-desktop"
                  {...register("message")}
                  placeholder="Type something..."
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-lime focus:border-transparent outline-none transition-all resize-none bg-white"
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
  );
};

export default ContactSection;
