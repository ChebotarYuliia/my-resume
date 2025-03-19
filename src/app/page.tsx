import { Grid } from "@/components/grid/Grid";
import { Hero } from "@/components/hero/Hero";
import {
  aboutList,
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
import { ScrollBlocks } from "@/components/scroll-blocks/ScrollBlocks";
import Image from "next/image";
import { WorkCardContent } from "@/components/work-card/WorkCardContent";

export default function Home() {
  return (
    <>
      <Theme />
      <Hero
        name="Yuliia Chebotar"
        subtitle="I build things for the web."
        text="I'm a developer with a passion for building accessible, pixel-perfect user interfaces that seamlessly combine thoughtful design with solid engineering."
        action={
          <Button
            variant="filled"
            href="/cv/Yuliia_Chebotar_CV_web-dev.pdf"
            target="_blank"
          >
            Download my CV
          </Button>
        }
        image={
          <Image
            src="/hero.webp"
            width={900}
            height={400}
            alt="Yuliia Chebotar portrait"
            priority={true}
          />
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
            {skills.map((skill) => (
              <span key={skill.title}>{skill.title}</span>
            ))}
          </SkillList>
        </SkillListLayout>
      </Section>

      {/* Work experience section */}
      <Section id={navLinks.experience.to} theme={"olive"}>
        <SectionTitle>Where I’ve Worked</SectionTitle>
        {workPlaces.map(({ pills, ...props }, i) => (
          <WorkCard link={props.link} key={`${props.title}-${props.period}`}>
            <WorkCardContent
              pills={pills.map((pill) => (
                <Pill key={`pill-${props.title}`}>{pill}</Pill>
              ))}
              {...props}
            />
          </WorkCard>
        ))}
      </Section>

      {/* Projects section */}
      <Section id={navLinks.projects.to} theme="slate">
        <SectionTitle>Some Things I’ve Built</SectionTitle>
        {projects.map((project) => (
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
            key={project.title}
          >
            <ProjectCardContent
              title={project.title}
              pills={project.pills.map((pill) => (
                <Pill key={pill}>{pill}</Pill>
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
            <ScrollBlocks
              list={aboutList}
              images={aboutList.map((listItem, i) => {
                return (
                  <Image
                    src={`/pictures/${i}.webp`}
                    alt="Picture of really cool activity"
                    loading="lazy"
                    width={600}
                    height={600}
                    key={listItem}
                  />
                );
              })}
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
            <p>But beyond the code, I love to</p>
          </Text>
        </About>
      </Section>

      {/* Contacts section */}
      <Section theme={"primary"}>
        <ContactsLayout
          links={socials.map((link) => (
            <ContactLink
              key={link.platform}
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
