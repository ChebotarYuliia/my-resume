import { CardProps } from "@/components/card/Card";
import { Icon } from "@/components/icon/Icon";
import { ProgressBarProps } from "@/components/progress-bar/ProgressBar";
import { WorkCardProps } from "@/components/work-card/WorkCard";

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

export const workPlaces: Array<
  Omit<WorkCardProps, "pills"> & { pills: Array<string> }
> = [
  {
    period: "Mar 2024 - Present",
    children: `Planned and built the front-end part completely from scratch. 
    Implemented smooth transitions and animation of 
components. Maintained admin panel in Payload CMS.`,
    title: "Web developer",
    company: "Freelance",
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
    period: "Aug 2022 - Mar 2024",
    children: `Contributed to the development of the fintech app, helping users achieve financial goals through features like a 
      sleek, intuitive Wishlist tool for budgeting and planning. Worked on a paragliding social network, building key interfaces 
      and features such as User Profiles, Reviews, and Complaints & Suggestions, 
      while ensuring a user-friendly experience with real-time weather 
      updates and event tracking.`,
    title: "Fullstack Developer",
    company: "ElifTech",
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
    period: "Feb 2019 - Dec 2019",
    children:
      "Developed, maintained, and shipped production code for client websites primarily using Vue, HTML, CSS, Sass, JavaScript, and jQuery",
    title: "Front-end Engineer",
    company: "Custom4Web",
    link: "https://www.custom4web.com",
    pills: ["JavaScript", "Vue", "HTML & Scss", "jQuery", "WordPress"],
  },
  {
    period: "Apr 2018 - Feb 2019",
    children:
      "Developed, maintained, and shipped production code for client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery",
    title: "Front-end Engineer",
    company: "Triplefork IT",
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
  // {
  //   period: "",
  //   children: "",
  //   title: "",
  //   company: "",
  //   link: "",
  //   pills: [""],
  // },
];

export const projects = [
  {
    title: "Art center",
    text: `Portal with articles, events, and new releases 
    within the art space. Implemented smooth transitions 
    and animation of components.`,
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
    title: "Music Award",
    text: `The Icelandic Music Awards are a harvest festival for the Icelandic 
    music industry, where what is done well is celebrated and respected. Built majority of screens and components.
    Transfered FE to the headless CMS Prismic.`,
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
