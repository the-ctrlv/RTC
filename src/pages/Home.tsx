import SEO from "@/components/SEO";
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
      <SEO
        title="Home"
        description="Professional rope access and industrial services across Canada. IRATA-certified technicians for building maintenance, inspections, and specialized access solutions in Vancouver and beyond."
        keywords="rope access, industrial services, building maintenance, IRATA certified, Vancouver, Canada, facade repairs, waterproofing, inspections"
      />
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
