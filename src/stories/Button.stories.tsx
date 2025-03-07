import { Button, ButtonVariant } from "@/components/Button/Button";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta = {
  title: "Button",
  component: Button,
  argTypes: {
    variant: {
      options: ButtonVariant,
      control: {
        type: "select",
      },
    },
  },
  args: { onClick: fn(), children: "Button with text" },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<Meta>;

export const Default: Story = {
  args: {
    variant: "default",
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
  },
};

export const Filled: Story = {
  args: {
    variant: "filled",
  },
};
