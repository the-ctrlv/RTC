import { useTranslation } from "react-i18next";

export type ProjectId =
  | "cardero"
  | "jimPattisonToyota"
  | "westGeorgia400"
  | "kelticPlace"
  | "parkTowers"
  | "businessCenterLangley"
  | "bayshoreGardens"
  | "georgia401"
  | "theGrande"
  | "riverGreen"
  | "fourSeasonsResort"
  | "soleil"
  | "theErickson"
  | "theDouglas"
  | "woodwards"
  | "vancouverHouse"
  | "teckResources"
  | "woodfibreLng"
  | "imperialOil"
  | "suncorEnergy"
  | "syncrudeCanada";

type ProjectMeta = {
  image?: string;
  galleryImage?: string;
};

export const PROJECT_META: Record<ProjectId, ProjectMeta> = {
  cardero: {
    image: "/projects/cardero.jpeg",
    galleryImage: "/slider/building/1.jpg",
  },
  jimPattisonToyota: {
    image: "/projects/jim.jpeg",
    galleryImage: "/slider/building/2.jpg",
  },
  westGeorgia400: {
    image: "/projects/400.jpeg",
    galleryImage: "/slider/building/3.jpg",
  },
  kelticPlace: {
    image: "/projects/keltic.jpeg",
    galleryImage: "/slider/building/4.jpg",
  },
  parkTowers: {
    image: "/projects/park.jpeg",
    galleryImage: "/slider/building/5.jpg",
  },
  businessCenterLangley: {
    image: "/projects/business.jpeg",
    galleryImage: "/slider/building/6.jpg",
  },
  bayshoreGardens: {
    image: "/projects/bayshore.jpeg",
    galleryImage: "/slider/building/7.jpg",
  },
  georgia401: {
    image: "/projects/401.jpeg",
    galleryImage: "/slider/building/8.jpg",
  },
  theGrande: {
    image: "/projects/grande.jpeg",
    galleryImage: "/slider/building/9.jpg",
  },
  riverGreen: {
    image: "/projects/river.jpeg",
    galleryImage: "/slider/building/10.jpg",
  },
  fourSeasonsResort: {
    image: "/projects/four.jpeg",
    galleryImage: "/slider/building/11.jpg",
  },
  soleil: {
    image: "/projects/soleil.jpeg",
    galleryImage: "/slider/building/12.jpg",
  },
  theErickson: { galleryImage: "/slider/building/13.jpg" },
  theDouglas: { galleryImage: "/slider/building/14.jpg" },
  woodwards: { galleryImage: "/slider/building/15.jpg" },
  vancouverHouse: { galleryImage: "/slider/building/16.jpg" },
  teckResources: { galleryImage: "/slider/industrial/2.jpg" },
  woodfibreLng: { galleryImage: "/slider/industrial/3.jpg" },
  imperialOil: { galleryImage: "/slider/industrial/4.jpg" },
  suncorEnergy: { galleryImage: "/slider/industrial/5.jpg" },
  syncrudeCanada: { galleryImage: "/slider/industrial/6.jpg" },
};

export const HOME_PROJECT_IDS: ProjectId[] = [
  "cardero",
  "jimPattisonToyota",
  "westGeorgia400",
  "kelticPlace",
];

export const PROJECTS_PAGE_IDS: ProjectId[] = [
  "cardero",
  "jimPattisonToyota",
  "westGeorgia400",
  "kelticPlace",
  "parkTowers",
  "businessCenterLangley",
  "bayshoreGardens",
  "georgia401",
  "theGrande",
  "riverGreen",
  "fourSeasonsResort",
  "soleil",
];

export const ABOUT_GALLERY_IDS: ProjectId[] = [
  "cardero",
  "jimPattisonToyota",
  "westGeorgia400",
  "kelticPlace",
  "parkTowers",
  "businessCenterLangley",
  "bayshoreGardens",
  "georgia401",
  "theGrande",
  "riverGreen",
  "fourSeasonsResort",
  "soleil",
  "theErickson",
  "theDouglas",
  "woodwards",
  "vancouverHouse",
  "teckResources",
  "woodfibreLng",
  "imperialOil",
  "suncorEnergy",
  "syncrudeCanada",
];

export type ProjectView = {
  id: ProjectId;
  image: string;
  galleryImage?: string;
  title: string;
  location: string;
  subtitle: string;
  tags: string[];
};

export const useProjects = (ids: ProjectId[]): ProjectView[] => {
  const { t } = useTranslation();

  return ids.map((id) => {
    const base = `projectsData.${id}`;
    const rawTags = t(`${base}.tags`, { returnObjects: true });
    const tags = Array.isArray(rawTags) ? (rawTags as string[]) : [];

    return {
      id,
      image: PROJECT_META[id].image ?? PROJECT_META[id].galleryImage ?? "",
      galleryImage: PROJECT_META[id].galleryImage,
      title: t(`${base}.title`),
      location: t(`${base}.location`),
      subtitle: t(`${base}.subtitle`),
      tags,
    };
  });
};

export const translateProjectTag = (t: ReturnType<typeof useTranslation>["t"], tag: string) =>
  t(`projectTags.${tag}`, { defaultValue: tag });
