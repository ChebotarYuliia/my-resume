import { Grid } from "@/components/grid/Grid";
import { Hero } from "@/components/hero/Hero";
import {
  aboutList,
  expertiseCards,
  projects,
  skills,
  workPlaces,
} from "../data/data";
import { Card } from "@/components/card/Card";
import { SkillListLayout } from "@/components/skill-list/SkillListLayout";
import { SkillList } from "@/components/skill-list/SkillList";
import { navLinks } from "../data/nav";
import { Section } from "@/components/section/Section";
import { Theme } from "@/components/theme/Theme";
import { SectionTitle } from "@/components/section-title/SectionTitle";
import { Button } from "@/components/Button/Button";
import { WorkCard } from "@/components/work-card/WorkCard";
import { Pill } from "@/components/pill/Pill";
import { ProjectList } from "@/components/project-list/ProjectList";
import { Text } from "@/components/text/Text";
import { CardsTrail } from "@/components/cards-trail/CardsTrail";
import Image from "next/image";
import { WorkCardContent } from "@/components/work-card/WorkCardContent";
import { getMessages } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import {
  ProjectListContent,
  ProjectListItem,
} from "@/components/project-list/ProjectListItem";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = hasLocale(routing.locales, rawLocale)
    ? rawLocale
    : routing.defaultLocale;
  const { Client } = await getMessages({ locale });

  return (
    <div className="main-content">
      <Theme />
      <Hero
        name={Client.hero_name}
        subtitle={Client.hero_subtitle}
        text={Client.hero_text}
        action={
          <Button
            variant="filled"
            href="/cv/Yuliia_Chebotar_CV_fullstack.pdf"
            target="_blank"
            aria-label={Client.hero_cv_button}
          >
            {Client.hero_cv_button}
          </Button>
        }
        image={
          <Image
            src="/hero.jpeg"
            width={900}
            height={400}
            alt={Client.hero_portrait_alt}
            priority={true}
          />
        }
      />

      {/* Expertise section */}
      <Section id={navLinks.expertise.to} theme="teal">
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
      <Section fullHeight id={navLinks.skills.to} theme="clay">
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
              pills={pills.map((pill) => (
                <Pill key={`pill-${props.title}`}>{pill}</Pill>
              ))}
              period={Client[props.period]}
              title={Client[props.title]}
              company={Client[props.company]}
              link={props.link}
            >
              {Client[`${props.children}`]}
            </WorkCardContent>
          </WorkCard>
        ))}
      </Section>

      {/* Projects section */}
      <Section id={navLinks.projects.to} theme="primary">
        <SectionTitle>{Client.section_projects}</SectionTitle>
        <ProjectList>
          {projects.map((project) => (
            <ProjectListItem
              key={project.title}
              title={Client[project.title]}
              text={Client[project.text]}
              pills={project.pills.map((pill) => (
                <Pill key={pill}>{pill}</Pill>
              ))}
              kicker={Client[project.liveSince]}
              action={
                project.liveUrl ? (
                  <Button
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outlined"
                  >
                    {Client.project_visit_site}
                  </Button>
                ) : undefined
              }
              blocks={project.blocks.map((block, i) => (
                <ProjectListContent
                  key={i}
                  image={
                    block.image
                      ? {
                          src: block.image,
                          alt: Client[block.imageAlt],
                          portrait: block.portrait,
                        }
                      : undefined
                  }
                >
                  <p>{Client[block.text]}</p>
                </ProjectListContent>
              ))}
            />
          ))}
        </ProjectList>
      </Section>

      {/* About me section */}
      <Section fullHeight id={navLinks.about.to} noSpacing theme="primary">
        <SectionTitle>{Client.section_about}</SectionTitle>
        {/* <About
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
        </About> */}
        <Text featured>
          <p dangerouslySetInnerHTML={{ __html: Client.about_main_text }} />
        </Text>

        <CardsTrail
          title={Client.get_to_know_me}
          items={aboutList}
          alt={Client.about_picture_alt}
        />
      </Section>
    </div>
  );
}
