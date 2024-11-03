import { CardProps } from "@/components/card/Card";
import { Icon } from "@/components/icon/Icon";
import { ProgressBarProps } from "@/components/progress-bar/ProgressBar";

export const socials = [
  {
    platform: "github",
    link: "https://github.com/ChebotarYuliia",
  },
  {
    platform: "linkedin",
    link: "https://www.linkedin.com/in/yuliia-chebotar-421340169/",
  },
  {
    platform: "telegram",
    link: "t.me/soykaJ",
  },
  {
    platform: "gmail",
    link: "mailto:chebotar609@gmail.com",
  },
];

export const expertiseCards: Array<CardProps> = [
  {
    title: "Web Development",
    subtitle: "Efficient, modular, and scalable applications",
    children:
      "Crafting interactive and dynamic user interfaces with React, ensuring clean, maintainable, and well-organized code.",
    icon: <Icon name="web" />,
  },
  {
    title: "UI/UX",
    subtitle: "User-focused design for enhanced experiences",
    children:
      "Crafting visually engaging, user-centered interfaces for seamless, accessible experiences.",
    icon: <Icon name="sparkle" />,
  },
  {
    title: "Animation & Microinteractions",
    subtitle: "Adding depth through smooth transitions and animations",
    children:
      "Bringing interfaces to life with engaging animations and transitions.",
    icon: <Icon name="slow-motion" />,
  },
  {
    title: "Responsive & Mobile-First Design",
    subtitle: "Optimized for any device",
    children:
      "Building layouts and components that look and perform beautifully on mobile, tablet, and desktop devices.",
    icon: <Icon name="pixel" />,
  },
  {
    title: "API Integration",
    subtitle: "Connecting data and services",
    children:
      "Experience in integrating REST and GraphQL APIs, ensuring seamless data fetching and management.",
    icon: <Icon name="view" />,
  },
  {
    title: "Team Collaboration",
    subtitle: "Effective and supportive team player",
    children:
      "Collaborating with cross-functional teams to deliver cohesive, high-quality projects.",
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
