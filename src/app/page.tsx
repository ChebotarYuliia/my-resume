import { Hero } from "@/components/hero/Hero";

export default function Home() {
  return (
    <Hero
      name="Yuliia Chebotar"
      greeting="Hello from:"
      titles={[
        "Web developer",
        "UI/UX",
        "Adaptive design",
        "Smooth animations",
        "Clean code",
        "Cool smile",
      ]}
    />
  );
}
