import { CTASection } from "@/components/common/CTASection";
import SEO from "@/components/SEO";
import { useTranslation } from "react-i18next";
import { PROJECTS_PAGE_IDS, translateProjectTag, useProjects } from "@/lib/projects";

const Projects = () => {
  const { t } = useTranslation();
  const projects = useProjects(PROJECTS_PAGE_IDS);

  return (
    <div className="min-h-screen">
      <SEO
        title={t("seo.projectsTitle")}
        description={t("seo.projectsDesc")}
        keywords={t("seo.projectsKeywords")}
      />
      <section className="bg-brand-dark text-white pt-[130px] pb-[50px] sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-14">
          <h1 className="text-[36px] lg:text-[64px] font-bold mb-4">{t("projectsPage.title")}</h1>
          <img
            src="/decoration_line.svg"
            alt={t("aria.decorativeDivider")}
            className="h-[14px] w-auto"
          />
        </div>
      </section>

      <section className="py-12 lg:pt-0 pt-0 bg-[#2d2d2d]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-14">
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[12px] mb-12">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group relative overflow-hidden rounded-[40px] cursor-pointer"
                >
                  <div className="aspect-square w-full max-h-[177px] sm:max-h-[277px] lg:max-h-none">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="max-h-[inherit] lg:h-full w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div
                    className="
                lg:absolute lg:bottom-0 lg:left-0 lg:right-0
                static
              "
                  >
                    <div className="flex items-center gap-2.5 text-white backdrop-blur-md py-5 px-6 lg:px-10 border-b border-brand-lime bg-black/30">
                      <img src="/map_pin.svg" alt={t("aria.mapPin")} className="w-6 h-auto" />
                      <div>
                        <div className="font-semibold text-base leading-tight">
                          {project.location}
                        </div>
                        <div className="text-white text-sm mt-0.5">{project.subtitle}</div>
                      </div>
                    </div>

                    <div className="bg-brand-dark-light p-6 px-6 lg:px-10">
                      <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                        {project.title}
                      </h2>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 rounded-full text-sm text-white border border-white/40"
                          >
                            {translateProjectTag(t, tag)}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#f5f5f5] py-[80px] lg:py-[120px]">
        <CTASection />
      </section>
    </div>
  );
};

export default Projects;
