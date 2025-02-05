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
import { About } from "@/components/about/About";
import { Text } from "@/components/text/Text";
import { ScrollList } from "@/components/scroll-list/ScrollList";

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
      <Section fullHeight id={navLinks.about.to} theme={"primary"}>
        <SectionTitle>About me</SectionTitle>
        <About
          features={
            <ScrollList
              heading="I'm"
              items={[
                <span>connoisseur of beauty</span>,
                <span>traveler</span>,
                <span>
                  curator of inspiring
                  <br /> work desks
                </span>,
              ]}
            />
          }
        >
          <Text>
            <p>
              Hi there! <br /> You’ve probably figured out by now that I’m a Web
              Developer who’s passionate about crafting{" "}
              <b>smooth, responsive, and visually engaging web experiences</b>.{" "}
              I love blending creativity with code, making sure every pixel is
              in its place while keeping performance top-notch. I’ve been doing
              this for almost <b>3 years</b> now, and it never gets old.
            </p>
          </Text>
          <Text>
            <p>
              One of the projects I had the chance to contribute to even earned
              an <b>Honorable Mention on Awwwards</b>&mdash;which was a pretty
              cool moment!
            </p>
          </Text>
          <Text>
            <p>But beyond the code,</p>
          </Text>
        </About>
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
