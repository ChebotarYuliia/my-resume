import { Grid } from "@/components/grid/Grid";
import { Hero } from "@/components/hero/Hero";
import { expertiseCards, skills, socials } from "./data/data";
import { Card } from "@/components/card/Card";
import { SkillListLayout } from "@/components/skill-list/SkillListLayout";
import { SkillList } from "@/components/skill-list/SkillList";
import { ProgressBar } from "@/components/progress-bar/ProgressBar";
import { ContactsLayout } from "@/components/contacts/ContactsLayout";
import { ContactLink } from "@/components/contacts/ContactLink";
import { TSocialIcon } from "@/components/icon/Icon";
import Image from "next/image";
import { navLinks } from "./data/nav";
import { Section } from "@/components/section/Section";
import { Theme } from "@/components/theme/Theme";

export default function Home() {
  return (
    <>
      <Theme />
      <Hero
        name="Yuliia Chebotar"
        // greeting="Hello from:"
        titles={[
          "Web developer",
          "UI/UX",
          "Adaptive design",
          "Smooth animations",
          "Clean code",
          "Cool smile",
        ]}
      />

      {/* Expertise section */}
      <Section id={navLinks.expertise.to}>
        <Grid>
          {expertiseCards.map(({ children, ...rest }, id) => (
            <Card key={id} {...rest}>
              {children}
            </Card>
          ))}
        </Grid>
      </Section>

      {/* About me section */}
      <Section id={navLinks.about.to} theme={"primary"}>
        <div style={{ height: "90vh" }}>About me section</div>
      </Section>

      {/* Skills section */}
      <Section id={navLinks.skills.to}>
        <SkillListLayout>
          <SkillList title={"My skill list:"}>
            {skills.map((skill, i) => (
              <ProgressBar key={i} {...skill} />
            ))}
          </SkillList>
        </SkillListLayout>
      </Section>

      {/* Work experience section */}
      <Section id={navLinks.experience.to} theme={"colored"}>
        <div style={{ height: "90vh" }}>Work experience section</div>
      </Section>

      {/* Contacts section */}
      <Section id={navLinks.contact.to} theme={"primary"}>
        <ContactsLayout
          links={socials.map((link, i) => (
            <ContactLink
              key={i}
              platform={link.platform as TSocialIcon}
              link={link.link}
            />
          ))}
          title="Where you can find me:"
        >
          <Image
            src="/contacts.gif"
            width={1500}
            height={1000}
            alt="swimming fish"
            priority={true}
          />
        </ContactsLayout>
      </Section>
    </>
  );
}
