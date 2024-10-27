import { Hero } from "@/components/hero/Hero";
import { Section } from "@/components/section/Section";

export default function Home() {
  return (
    <div>
      <Section>
        <Hero
          name="Yuliia"
          greeting="Hello"
          titles={[
            "Web developer",
            "UI/UX",
            "Adaptive design",
            "Smooth animations",
            "Clean code",
            "Cool smile",
          ]}
        />
      </Section>
    </div>
  );
}
