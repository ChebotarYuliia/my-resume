import { CardProps } from "@/components/card/Card";
import { Icon } from "@/components/icon/Icon";
import { ProgressBarProps } from "@/components/progress-bar/ProgressBar";
import { WorkCardProps } from "@/components/work-card/WorkCard";
import { WorkCardContentProps } from "@/components/work-card/WorkCardContent";

export const socials = [
  {
    platform: "github",
    link: "https://github.com/ChebotarYuliia",
  },
  {
    platform: "linkedin",
    link: "https://www.linkedin.com/in/yuliia-c-421340169/",
  },
  {
    platform: "telegram",
    link: "https://t.me/soykaJ",
  },
  {
    platform: "gmail",
    link: "mailto:chebotar609@gmail.com",
  },
];

export const expertiseCards: Array<CardProps> = [
  {
    title: "expertise_web_title",
    subtitle: "expertise_web_subtitle",
    children: "expertise_web_text",
    icon: <Icon name="web" />,
  },
  {
    title: "expertise_ui_title",
    subtitle: "expertise_ui_subtitle",
    children: "expertise_ui_text",
    icon: <Icon name="sparkle" />,
  },
  {
    title: "expertise_animation_title",
    subtitle: "expertise_animation_subtitle",
    children: "expertise_animation_text",
    icon: <Icon name="slow-motion" />,
  },
  {
    title: "expertise_responsive_title",
    subtitle: "expertise_responsive_subtitle",
    children: "expertise_responsive_text",
    icon: <Icon name="pixel" />,
  },
  {
    title: "expertise_api_title",
    subtitle: "expertise_api_subtitle",
    children: "expertise_api_text",
    icon: <Icon name="view" />,
  },
  {
    title: "expertise_collaboration_title",
    subtitle: "expertise_collaboration_subtitle",
    children: "expertise_collaboration_text",
    icon: <Icon name="idea" />,
  },
];

export const skills: Array<ProgressBarProps> = [
  {
    title: "JavaScript",
    percentage: 85,
  },
  {
    title: "HTML5",
    percentage: 90,
  },
  {
    title: "CSS, SASS/SCSS, LESS, CSS Modules",
    percentage: 90,
  },
  {
    title: "TypeScript",
    percentage: 70,
  },
  {
    title: "SQL/PostgreSQL",
    percentage: 50,
  },
  {
    title: "React.js + Redux",
    percentage: 87,
  },
  {
    title: "Next.js",
    percentage: 80,
  },
  {
    title: "CMS: Prismic, Payload",
    percentage: 75,
  },
  {
    title: "UI/UX",
    percentage: 84,
  },
  {
    title: "Webflow",
    percentage: 50,
  },
  {
    title: "Pagespeed optimization",
    percentage: 69,
  },
  {
    title: "Figma",
    percentage: 70,
  },
  {
    title: "SEO",
    percentage: 70,
  },
  {
    title: "React Native",
    percentage: 35,
  },
];

export const workPlaces: Array<
  Omit<WorkCardProps, "children"> &
    Omit<WorkCardContentProps, "pills"> & {
      pills: Array<string>;
    }
> = [
  {
    period: "work_freelance_period",
    children: "work_freelance_text",
    title: "work_freelance_title",
    company: "work_freelance_company",
    pills: [
      "JavaScript",
      "TypeScript",
      "Next.js",
      "React",
      "GSAP",
      "SCSS",
      "Payload CMS",
      "Prismic CMS",
      "MongoDB",
      "GraphQL",
    ],
  },
  {
    period: "work_eliftech_period",
    children: "work_eliftech_text",
    title: "work_eliftech_title",
    company: "work_eliftech_company",
    link: "https://www.eliftech.com",
    pills: [
      "JavaScript",
      "TypeScript",
      "Next.js",
      "React",
      "SCSS",
      "NestJS",
      "MongoDB",
    ],
  },
  {
    period: "work_custom4web_period",
    children: "work_custom4web_text",
    title: "work_custom4web_title",
    company: "work_custom4web_company",
    link: "https://www.custom4web.com",
    pills: ["JavaScript", "Vue", "HTML & Scss", "jQuery", "WordPress"],
  },
  {
    period: "work_triplefork_period",
    children: "work_triplefork_text",
    title: "work_triplefork_title",
    company: "work_triplefork_company",
    link: "https://tripleforkit.com",
    pills: [
      "JavaScript",
      "HTML & Scss",
      "jQuery",
      "Bootstrap",
      "WordPress",
      "Photoshop",
    ],
  },
];

export const projects = [
  {
    title: "project_art_center_title",
    text: "project_art_center_text",
    pills: [
      "Awwwards",
      "Honorable Mention",
      "Public website of the year",
      "Next.js",
      "SCSS",
      "Google Map API",
    ],
    media: "/projects/art_center.webm",
  },
  {
    title: "project_music_award_title",
    text: "project_music_award_text",
    pills: [
      "Next.js",
      "SCSS",
      "Prismic CMS",
      "GraphQl",
      "Google Sheets API",
      "Spotify API",
    ],
    media: "/projects/music_award.webm",
  },
];

export const aboutList = [
  "drink_coffee",
  "breathtaking_moments",
  "appreciate_beauty",
];
