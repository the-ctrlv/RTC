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
    const subject = encodeURIComponent(
      `Contact Form Submission from ${data.name}`
    );
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    );
    const mailtoLink = `mailto:Skyaccessbc@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
    reset();
  };

  return (
    <section className="py-16 sm:py-20 lg:py-[150px] bg-brand-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-14">
        {/* Mobile Layout - Single Column */}
        <div className="lg:hidden space-y-8">
          {/* Contact Information */}
          <div className="bg-brand-gray py-6">
            <h3 className="text-[#a5b715] font-bold mb-2 uppercase text-base tracking-wider">
              CONTACT US
            </h3>
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Get in Touch
            </h2>

            <div className="space-y-6">
              <div>
                <h4 className="text-[#a5b715] font-bold mb-2 uppercase text-base tracking-wider">
                  EMAIL
                </h4>
                <a
                  href="mailto:info.ropetechgroup@gmail.com"
                  className="text-gray-900 hover:text-[#a5b715] transition-colors text-sm block"
                >
                  info.ropetechgroup@gmail.com
                </a>
              </div>

              <div>
                <h4 className="text-[#a5b715] font-bold mb-2 uppercase text-base tracking-wider">
                  PHONE
                </h4>
                <div className="text-gray-900 text-sm">
                  <a
                    href="tel:+17789807798"
                    className="hover:text-[#a5b715] transition-colors"
                  >
                    1(778)980-7798
                  </a>
                  ,{" "}
                  <a
                    href="tel:+16046574744"
                    className="hover:text-[#a5b715] transition-colors"
                  >
                    1(604)657-4744
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-[#a5b715] font-bold mb-2 uppercase text-base tracking-wider">
                  LOCATION
                </h4>
                <p className="text-gray-900 text-sm">
                  142B W 8th Ave,Vancouver, BC V6H 1E1
                </p>
              </div>

              <div className="flex justify-start gap-6">
                {/* Facebook */}
                <a
                  href="https://facebook.com"
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
                    fill="url(#instagram-gradient-mobile)"
                    viewBox="0 0 24 24"
                  >
                    {" "}
                    <defs>
                      {" "}
                      <linearGradient
                        id="instagram-gradient-mobile"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-lime3 focus:border-transparent outline-none transition-all bg-white text-sm"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-lime3 focus:border-transparent outline-none transition-all bg-white text-sm"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-lime3 focus:border-transparent outline-none transition-all resize-none bg-white text-sm"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#d3f143] hover:bg-[#d3f143]/90 text-gray-900 font-semibold py-5 text-base rounded-lg"
              >
                Send
              </Button>
            </form>
          </div>
        </div>

        {/* Desktop Layout - Two Columns */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-lime3 font-bold mb-4 uppercase text-base tracking-wider">
              CONTACT US
            </h3>
            <h2 className="text-[48px] font-bold mb-14 text-gray-900">
              Get in Touch
            </h2>

            <div className="space-y-8">
              <div>
                <h4 className="text-[#a5b715] font-bold mb-2 uppercase text-base tracking-wider">
                  EMAIL
                </h4>
                <a
                  href="mailto:info.ropetechgroup@gmail.com"
                  className="hover:text-[#a5b715] transition-colors text-base text-black block font-bold"
                >
                  info.ropetechgroup@gmail.com
                </a>
              </div>

              <div>
                <h4 className="text-[#a5b715] font-bold mb-2 uppercase text-base tracking-wider">
                  PHONE
                </h4>
                <div className="text-gray-900 text-base">
                  <a
                    href="tel:+17789807798"
                    className="hover:text-[#a5b715] transition-colors text-black font-bold"
                  >
                    1(778)980-7798
                  </a>
                  ,{" "}
                  <a
                    href="tel:+16046574744"
                    className="hover:text-[#a5b715] transition-colors text-black font-bold"
                  >
                    1(604)657-4744
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-[#a5b715] font-bold mb-2 uppercase text-base tracking-wider">
                  LOCATION
                </h4>
                <p className="text-base text-black font-bold">
                  142B W 8th Ave,Vancouver, BC V6H 1E1
                </p>
              </div>

              <div className="flex justify-start gap-6">
                {/* Facebook */}
                <a
                  href="https://facebook.com"
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
                  href="https://instagram.com/ropetechgroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#c3d533] transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="url(#instagram-gradient-desktop)"
                    viewBox="0 0 24 24"
                  >
                    {" "}
                    <defs>
                      {" "}
                      <linearGradient
                        id="instagram-gradient-desktop"
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
          </div>

          {/* Contact Form */}
          <div className="p-12 bg-white rounded-[40px]">
            <h2 className="text-[36px] font-bold mb-8 text-gray-900">
              Fill Out the Form
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label
                  htmlFor="name-desktop"
                  className="block text-base font-semibold mb-2"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="name-desktop"
                  {...register("name", { required: "Name is required" })}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-lime3 focus:border-transparent outline-none transition-all bg-white"
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
                  className="block text-base font-semibold mb-2"
                >
                  Your e-mail
                </label>
                <input
                  type="email"
                  id="email-desktop"
                  {...register("email", { required: "Email is required" })}
                  placeholder="olivia@untitledui.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-lime3 focus:border-transparent outline-none transition-all bg-white"
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
                  className="block text-base font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message-desktop"
                  {...register("message")}
                  placeholder="Type something..."
                  rows={2}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-lime3 focus:border-transparent outline-none transition-all resize-none bg-white"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#d9f143] hover:bg-[#d9f143]/90 text-gray-900 font-semibold py-6 text-base"
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
