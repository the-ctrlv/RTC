import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">EMAIL</h3>
                <a
                  href="mailto:INFO.ROPETECHGROUP@GMAIL.COM"
                  className="text-lime-600 hover:text-lime-700"
                >
                  INFO.ROPETECHGROUP@GMAIL.COM
                </a>
              </div>
              <div>
                <h3 className="font-semibold mb-2">CONTACT NOS.</h3>
                <p className="text-gray-700">
                  1(778)980-7798 OR 1(604)657-4744
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">
                  CALL US AT ANYTIME(24/5, MON-FRI)
                </h3>
              </div>
              <div>
                <h3 className="font-semibold mb-2">OFFICE ADDRESS:</h3>
                <p className="text-gray-700">
                  604-6200 MCKAY AVE BURNABY, BC V5H 4M9
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-8">Fill Out the Form</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Your name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Your E-mail
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent outline-none resize-none"
                ></textarea>
              </div>
              <Button className="w-full bg-lime-400 hover:bg-lime-500 text-black font-semibold py-6 text-lg">
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
