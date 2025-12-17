import { CheckCircle2 } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Expertise",
      description:
        "Our IRATA-trained professionals deliver certified, safe, and efficient rope access solutions for every project.",
    },
    {
      title: "Quality",
      description:
        "We use only the safest and highest-quality equipment, ensuring precision and durability in all our services.",
    },
    {
      title: "Cost-effectiveness",
      description:
        "Rope access eliminates the need for costly scaffolding, saving you time and money while achieving superior results.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="border-4 border-dashed border-blue-500 rounded-lg p-12">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Key Benefits of Working With Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
