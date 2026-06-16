import SEO from "@/components/SEO";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
  return (
    <div className="min-h-screen">
      <SEO
        title={t("seo.homeTitle")}
        description={t("seo.homeDesc")}
        keywords={t("seo.homeKeywords")}
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
