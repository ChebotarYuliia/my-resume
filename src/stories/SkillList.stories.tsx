import { ProgressBar } from "@/components/progress-bar/ProgressBar";
import { Section } from "@/components/section/Section";
import { SkillList, SkillListVariant } from "@/components/skill-list/SkillList";
import { SkillListLayout } from "@/components/skill-list/SkillListLayout";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "SkillList",
  component: SkillList,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Section>
        <SkillListLayout>
          <Story />
        </SkillListLayout>
      </Section>
    ),
  ],
  argTypes: {
    variant: {
      options: SkillListVariant,
      control: {
        type: "select",
      },
    },
  },
} satisfies Meta<typeof SkillList>;

export default meta;
type Story = StoryObj<Meta>;

export const Default: Story = {
  args: {
    variant: "default",
  },
  render: (args) => {
    return (
      <SkillList {...args}>
        {Array(6)
          .fill(null)
          .map((_, index) => {
            return (
              <ProgressBar
                key={index}
                percentage={(index + 12) * (index || 2)}
                title={`Skill ${index + 1}`}
              />
            );
          })}
      </SkillList>
    );
  },
};

export const Compact: Story = {
  args: {
    variant: "compact",
  },
  render: (args) => {
    return (
      <SkillList {...args}>
        {Array(7)
          .fill(null)
          .map((_, index) => {
            return <span key={index}>List item {index + 1}</span>;
          })}
      </SkillList>
    );
  },
};
