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

export default function Home() {
  return (
    <>
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
      <Grid id={navLinks.expertise.to}>
        {expertiseCards.map(({ children, ...rest }, id) => (
          <Card key={id} {...rest}>
            {children}
          </Card>
        ))}
      </Grid>

      {/* About me section */}
      <div style={{ height: "90vh" }} id={navLinks.about.to}>
        About me section
      </div>

      {/* Skills section */}
      <SkillListLayout id={navLinks.skills.to}>
        <SkillList title={"My skill list:"}>
          {skills.map((skill, i) => (
            <ProgressBar key={i} {...skill} />
          ))}
        </SkillList>
      </SkillListLayout>

      {/* Work experience section */}
      <div style={{ height: "90vh" }} id={navLinks.experience.to}>
        Work experience section
      </div>

      {/* Contacts section */}
      <ContactsLayout
        id={navLinks.contact.to}
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
    </>
  );
}
