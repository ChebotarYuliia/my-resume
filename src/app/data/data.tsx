import { CardProps } from "@/components/card/Card";
import { ContactLinkProps } from "@/components/contacts/ContactLink";
import { Icon } from "@/components/icon/Icon";
import { ProgressBarProps } from "@/components/progress-bar/ProgressBar";
import { WorkCardProps } from "@/components/work-card/WorkCard";
import { WorkCardContentProps } from "@/components/work-card/WorkCardContent";

export const socials: Array<ContactLinkProps> = [
  {
    platform: "github",
    label: "github_personal",
    link: "https://github.com/ChebotarYuliia",
  },
  {
    platform: "github",
    label: "github_work",
    link: "https://github.com/julezberry",
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

export const email = socials
  .find((s) => s.platform === "gmail")!
  .link.replace("mailto:", "");

export const expertiseCards: Array<CardProps> = [
  {
    title: "expertise_web_title",
    subtitle: "expertise_web_subtitle",
    children: "expertise_web_text",
    icon: <Icon name="web" />,
  },
  {
    title: "expertise_backend_title",
    subtitle: "expertise_backend_subtitle",
    children: "expertise_backend_text",
    icon: <Icon name="idea" />,
  },
  {
    title: "expertise_api_title",
    subtitle: "expertise_api_subtitle",
    children: "expertise_api_text",
    icon: <Icon name="view" />,
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
];

export const skills: Array<ProgressBarProps> = [
  // {
  //   title: "JavaScript",
  //   percentage: 85,
  // },
  // {
  //   title: "HTML5",
  //   percentage: 90,
  // },
  {
    title: "TypeScript",
    percentage: 88,
  },
  {
    title: "React.js & Next.js",
    percentage: 90,
  },
  {
    title: "Payload CMS (multi-tenant, live preview)",
    percentage: 85,
  },
  {
    title: "REST & GraphQL API Integration",
    percentage: 82,
  },
  {
    title: "Search Integration (Algolia, Cludo)",
    percentage: 78,
  },
  {
    title: "GSAP & Motion Design",
    percentage: 78,
  },
  {
    title: "next-intl / i18n Architecture",
    percentage: 75,
  },
  {
    title: "SCSS / CSS Modules",
    percentage: 82,
  },
  {
    title: "UI/UX",
    percentage: 84,
  },
  {
    title: "Zod & Type-safe Validation",
    percentage: 72,
  },
  {
    title: "Turborepo / pnpm Monorepos",
    percentage: 72,
  },
  {
    title: "SEO & Pagespeed Optimization",
    percentage: 72,
  },
  {
    title: "Figma",
    percentage: 70,
  },
  {
    title: "Vercel",
    percentage: 75,
  },
  {
    title: "PostgreSQL / MongoDB",
    percentage: 55,
  },
];

export const workPlaces: Array<
  Omit<WorkCardProps, "children"> &
    Omit<WorkCardContentProps, "pills"> & {
      pills: Array<string>;
    }
> = [
  {
    period: "work_hxm_period",
    children: "work_hxm_text",
    title: "work_hxm_title",
    company: "work_hxm_company",
    link: "https://www.hugsmidjan.is/",
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
    title: "project_si_title",
    text: "project_si_text",
    pills: [
      "Next.js",
      "Payload CMS (multi-tenant)",
      "External API integration",
      "Legacy system migration",
      "TypeScript",
    ],
    liveSince: "project_si_since",
    liveUrl: "https://www.si.is/",
    blocks: [
      {
        text: "project_si_block1_text",
        image: "/projects/si.png",
        imageAlt: "project_si_block_alt",
      },
    ],
  },
  {
    title: "project_viska_title",
    text: "project_viska_text",
    pills: ["Cludo AI search", "React", "Next.js", "TypeScript", "GSAP"],
    liveSince: "project_viska_since",
    liveUrl: "https://www.viska.is/",
    blocks: [
      {
        text: "project_viska_block1_text",
        image: "/projects/viska.png",
        imageAlt: "project_viska_block1_alt",
      },
      {
        text: "project_viska_block2_text",
        image: "/projects/viska_2.png",
        imageAlt: "project_viska_block2_alt",
      },
      {
        text: "project_viska_block3_text",
        image: "/projects/viska_mobile.png",
        imageAlt: "project_viska_block3_alt",
        portrait: true,
      },
    ],
  },
  {
    title: "project_nattura_title",
    text: "project_nattura_text",
    pills: [
      "Next.js",
      "Payload CMS",
      "next-intl",
      "Custom interactive map",
      "TypeScript",
    ],
    liveSince: "project_nattura_since",
    liveUrl: "https://www.nattura.is/",
    blocks: [
      {
        text: "project_nattura_block1_text",
        image: "/projects/nattura.png",
        imageAlt: "project_nattura_block_alt",
      },
    ],
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
    liveSince: "project_music_award_since",
    liveUrl: "https://www.iston.is/",
    blocks: [
      {
        text: "project_music_award_detail",
        image: "/projects/music_award.png",
        imageAlt: "project_music_award_block1_alt",
      },
    ],
  },
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
    liveSince: "project_art_center_since",
    liveUrl: "https://www.icelandicartcenter.is/",
    blocks: [
      {
        text: "project_art_center_detail",
        image: "/projects/art_center.png",
        imageAlt: "project_art_center_block1_alt",
      },
    ],
  },
];

export const aboutList = [
  // { src: "drink_coffee", width: 960, height: 1280 },
  { src: "breathtaking_moments", width: 960, height: 1280 },
  { src: "take_pics", width: 3360, height: 2240 },
  { src: "appreciate_beauty", width: 960, height: 1280 },
  { src: "eat_with_a_view", width: 1536, height: 2048 },
  { src: "plant_parent", width: 666, height: 1182 },
  { src: "discover_things", width: 3213, height: 5712 },
  { src: "play_music", width: 1002, height: 1326 },
];
