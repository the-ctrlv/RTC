const AboutSection = () => {
  const stats = [
    { value: "95%", label: "Customer Satisfaction Rate" },
    { value: "500+", label: "Successful Projects Completed" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=800"
              alt="Rope access worker"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Delivering Safe & Certified Rope Access Solutions
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Since 2018, Rope Tech Group has delivered expert rope access and
              building maintenance services across Canada. Our IRATA-certified
              technicians bring precision, safety, and efficiency to every
              project, ensuring the highest standards from start to finish.
            </p>
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-5xl font-bold text-lime-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
