import { Grid } from "@/components/grid/Grid";
import { Hero } from "@/components/hero/Hero";
import {
  aboutList,
  expertiseCards,
  projects,
  skills,
  socials,
  workPlaces,
} from "../data/data";
import { Card } from "@/components/card/Card";
import { SkillListLayout } from "@/components/skill-list/SkillListLayout";
import { SkillList } from "@/components/skill-list/SkillList";
import { ContactsLayout } from "@/components/contacts/ContactsLayout";
import { ContactLink } from "@/components/contacts/ContactLink";
import { TSocialIcon } from "@/components/icon/Icon";
import { navLinks } from "../data/nav";
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
import { getMessages } from "next-intl/server";
import { Locale } from "@/i18n/i18n";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const { Client } = await getMessages({ locale });
  return (
    <>
      <Theme />
      <Hero
        name={Client.hero_name}
        subtitle={Client.hero_subtitle}
        text={Client.hero_text}
        action={
          <Button
            variant="filled"
            href="/cv/Yuliia_Chebotar_CV_web-dev.pdf"
            target="_blank"
            area-label={Client.hero_cv_button}
          >
            {Client.hero_cv_button}
          </Button>
        }
        image={
          <Image
            src="/hero.webp"
            width={900}
            height={400}
            alt={Client.hero_portrait_alt}
            priority={true}
          />
        }
      />

      {/* Expertise section */}
      <Section id={navLinks.expertise.to}>
        <SectionTitle>{Client.section_expertise}</SectionTitle>
        <Grid>
          {expertiseCards.map(({ children, ...rest }, id) => (
            <Card key={id} {...rest}>
              {Client[`${children}`]}
            </Card>
          ))}
        </Grid>
      </Section>

      {/* Skills section */}
      <Section fullHeight id={navLinks.skills.to}>
        <SectionTitle>{Client.section_technologies}</SectionTitle>
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
        <SectionTitle>{Client.section_experience}</SectionTitle>
        {workPlaces.map(({ pills, ...props }) => (
          <WorkCard link={props.link} key={`${props.title}-${props.period}`}>
            <WorkCardContent
              locale={locale}
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
        <SectionTitle>{Client.section_projects}</SectionTitle>
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
              title={Client[project.title]}
              pills={project.pills.map((pill) => (
                <Pill key={pill}>{pill}</Pill>
              ))}
            >
              {Client[project.text]}
            </ProjectCardContent>
          </ProjectCard>
        ))}
      </Section>

      {/* About me section */}
      <Section fullHeight id={navLinks.about.to} theme={"primary"}>
        <SectionTitle>{Client.section_about}</SectionTitle>
        <About
          features={
            <ScrollBlocks
              list={aboutList}
              images={aboutList.map((listItem, i) => {
                return (
                  <Image
                    src={`/pictures/${i}.webp`}
                    alt={Client.about_picture_alt}
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
            <p dangerouslySetInnerHTML={{ __html: Client.about_main_text }} />
          </Text>
          <Text>
            <p
              dangerouslySetInnerHTML={{
                __html: Client.about_honorable_mention,
              }}
            />
          </Text>
          <Text>
            <p dangerouslySetInnerHTML={{ __html: Client.about_beyond_code }} />
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
          title={Client.section_contact}
          author={Client.build_by}
        ></ContactsLayout>
      </Section>
    </>
  );
}
