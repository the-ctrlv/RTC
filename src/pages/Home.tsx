import {
  HeroSection,
  AboutSection,
  BenefitsSection,
  OurServicesSection,
  ProjectsSection,
  TestimonialsSection,
  ContactSection,
} from "@/components/home";

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <OurServicesSection />

      <TestimonialsSection />
      {/* <ServicesSection /> */}
      <ProjectsSection />

      <ContactSection />
    </div>
  );
};

export default Home;
