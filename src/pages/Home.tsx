import {
  HeroSection,
  AboutSection,
  BenefitsSection,
  OurServicesSection,
  ProjectsSection,
  TestimonialsSection,
  CTASection,
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
      <CTASection />
      {/* <ServicesSection /> */}
      <ProjectsSection />

      <ContactSection />
    </div>
  );
};

export default Home;
