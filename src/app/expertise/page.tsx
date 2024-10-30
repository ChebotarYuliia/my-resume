import { Card, CardProps } from "@/components/card/Card";
import { Grid } from "@/components/grid/Grid";
import { Icon } from "@/components/icon/Icon";

const cards: Array<CardProps> = [
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

export default function ExpertisePage() {
  return (
    <Grid>
      {cards.map(({ children, ...rest }, id) => (
        <Card key={id} {...rest}>
          {children}
        </Card>
      ))}
    </Grid>
  );
}
