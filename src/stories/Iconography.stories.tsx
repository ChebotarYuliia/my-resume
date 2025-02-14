import { Icon, SOCIALS, ICONS } from "@/components/icon/Icon";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Icon",
  component: Icon,
  argTypes: {
    name: {
      options: [...SOCIALS, ...ICONS],
      control: {
        type: "select",
      },
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<Meta>;

export const Default: Story = {
  args: {
    name: ICONS[0],
  },
};
