import { Grid } from "@/components/grid/Grid";
import { Hero } from "@/components/hero/Hero";
import {
  expertiseCards,
  projects,
  skills,
  socials,
  workPlaces,
} from "./data/data";
import { Card } from "@/components/card/Card";
import { SkillListLayout } from "@/components/skill-list/SkillListLayout";
import { SkillList } from "@/components/skill-list/SkillList";
import { ContactsLayout } from "@/components/contacts/ContactsLayout";
import { ContactLink } from "@/components/contacts/ContactLink";
import { TSocialIcon } from "@/components/icon/Icon";
import { navLinks } from "./data/nav";
import { Section } from "@/components/section/Section";
import { Theme } from "@/components/theme/Theme";
import { SectionTitle } from "@/components/section-title/SectionTitle";
import { Button } from "@/components/Button/Button";
import { WorkCard } from "@/components/work-card/WorkCard";
import { Pill } from "@/components/pill/Pill";
import { ProjectCard } from "@/components/project-card/ProjectCard";
import { ProjectCardContent } from "@/components/project-card/ProjectCardContent";
import { Video } from "@/components/video/Video";

export default function Home() {
  return (
    <>
      <Theme />
      <Hero
        name="Yuliia Chebotar"
        subtitle="I build things for the web."
        text="I'm a developer with a passion for building accessible, pixel-perfect user interfaces that seamlessly combine thoughtful design with solid engineering."
        // titles={[
        //   "Web developer",
        //   "UI/UX",
        //   "Adaptive design",
        //   "Smooth animations",
        //   "Clean code",
        //   // "Cool smile",
        // ]}
        action={
          <Button
            variant="filled"
            href="/cv/Yuliia_Chebotar_CV_web-dev.pdf"
            target="_blank"
          >
            Download my CV
          </Button>
        }
      />

      {/* Expertise section */}
      <Section id={navLinks.expertise.to}>
        <SectionTitle>Expertise</SectionTitle>
        <Grid>
          {expertiseCards.map(({ children, ...rest }, id) => (
            <Card key={id} {...rest}>
              {children}
            </Card>
          ))}
        </Grid>
      </Section>

      {/* Skills section */}
      <Section fullHeight id={navLinks.skills.to}>
        <SectionTitle>Technologies I’ve been working with</SectionTitle>
        <SkillListLayout>
          <SkillList variant="compact">
            {skills.map((skill, i) => (
              // <ProgressBar key={i} {...skill} />
              <span key={i}>{skill.title}</span>
            ))}
          </SkillList>
        </SkillListLayout>
      </Section>

      {/* Work experience section */}
      <Section id={navLinks.experience.to} theme={"olive"}>
        <SectionTitle>Where I’ve Worked</SectionTitle>
        {workPlaces.map(({ pills, ...props }, i) => (
          <WorkCard
            pills={pills.map((pill, i) => (
              <Pill key={i}>{pill}</Pill>
            ))}
            {...props}
            key={i}
          />
        ))}
      </Section>

      {/* Projects section */}
      <Section id={navLinks.projects.to} theme="slate">
        <SectionTitle>Some Things I’ve Built</SectionTitle>
        {projects.map((project, i) => (
          <ProjectCard
            media={
              <Video
                src={project.media}
                width={600}
                height={400}
                autoplay={false}
                loop={true}
              />
            }
            key={i}
          >
            <ProjectCardContent
              title={project.title}
              pills={project.pills.map((pill, i) => (
                <Pill key={i}>{pill}</Pill>
              ))}
            >
              {project.text}
            </ProjectCardContent>
          </ProjectCard>
        ))}
      </Section>

      {/* About me section */}
      <Section id={navLinks.about.to} theme={"primary"}>
        <SectionTitle>About me</SectionTitle>
        <div style={{ height: "90vh" }}>content...</div>
      </Section>

      {/* Contacts section */}
      <Section theme={"primary"}>
        <ContactsLayout
          links={socials.map((link, i) => (
            <ContactLink
              key={i}
              platform={link.platform as TSocialIcon}
              link={link.link}
            />
          ))}
          title="Get In Touch"
          author="Designed & Built by Yuliia Chebotar"
        ></ContactsLayout>
      </Section>
    </>
  );
}
