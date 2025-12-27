import { Button } from "./ui/button";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export const ContactForm = () => {
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
    <div className="bg-white p-7 sm:p-8 lg:p-10 rounded-[40px] order-1 lg:order-2">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8">Fill Out the Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-base font-semibold text-gray-700 mb-2">
            Your name
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Name is required" })}
            placeholder="Enter your name"
            className="bg-white placeholder:font-semibold placeholder:text-[#9D9D9D] w-full h-12 px-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-lime focus:border-transparent outline-none transition-all"
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-base font-semibold text-gray-700 mb-2">
            Your e-mail
          </label>
          <input
            type="email"
            id="email"
            {...register("email", { required: "Email is required" })}
            placeholder="olivia@untitledui.com"
            className="bg-white placeholder:font-semibold placeholder:text-[#9D9D9D] w-full h-12 px-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-lime focus:border-transparent outline-none transition-all rounded-[8px]"
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
        </div>

        <div className="mb-10">
          <label htmlFor="message" className="block text-base font-semibold text-gray-700 mb-2">
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
  );
};
