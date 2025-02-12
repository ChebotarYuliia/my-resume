import { workPlaces } from "@/app/data/data";
import { Button } from "@/components/Button/Button";
import { Pill } from "@/components/pill/Pill";
import { SectionTitle } from "@/components/section-title/SectionTitle";
import { Section } from "@/components/section/Section";
import { Text } from "@/components/text/Text";
import { Theme } from "@/components/theme/Theme";
import { SectionTheme, UIStateProvider } from "@/state/state";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Section",
  component: Section,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <UIStateProvider>
        <Theme />
        <Story />
      </UIStateProvider>
    ),
  ],
  argTypes: {
    theme: {
      options: SectionTheme,
      control: {
        type: "select",
      },
    },
  },
  args: {
    children: (
      <>
        <SectionTitle>Section title</SectionTitle>
        <Text>
          <p style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {workPlaces[0].pills.map((pill, i) => (
              <Pill key={i}>{pill}</Pill>
            ))}
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              marginBlock: "30px",
            }}
          >
            <Button variant="default">Button default</Button>
            <Button variant="outlined">Button outlined</Button>
            <Button variant="filled">Button filled</Button>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
            ducimus est ad, sapiente iusto deserunt ut quibusdam enim temporibus
            fugit omnis laborum recusandae odit facere mollitia dolorem
            dignissimos eius a in corrupti debitis sequi adipisci repellat
            numquam! Asperiores explicabo unde repellendus omnis doloribus quo
            nostrum cum libero! Fuga ad eveniet repellat enim quos earum
            consequatur numquam nemo unde, blanditiis vero hic aliquam,
            exercitationem culpa maxime. Pariatur rem animi repellendus amet,
            hic architecto labore laborum accusamus veritatis voluptatem
            explicabo alias voluptatum blanditiis ab maxime ipsa quaerat iusto
            nam ullam.
          </p>
        </Text>
      </>
    ),
  },
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<Meta>;

export const Default: Story = {
  args: {
    theme: "default",
  },
};

export const Primary: Story = {
  args: {
    theme: "primary",
  },
};

export const Slate: Story = {
  args: {
    theme: "slate",
  },
};

export const Olive: Story = {
  args: {
    theme: "olive",
  },
};
