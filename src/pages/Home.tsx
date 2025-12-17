import {
  HeroSection,
  AboutSection,
  BenefitsSection,
  ServicesSection,
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
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
    </div>
  );
};

export default Home;
