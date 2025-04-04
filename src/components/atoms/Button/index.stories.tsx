import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Button } from "./";

// NOTE: importしたButtonコンポーネントをdefault exportに指定することで、Storybookがこのコンポーネントを認識します。
// NOTE: argsで指定した値は、すべてのStoryに適用されます。
// NOTE: argsで指定した値は、各Storyで上書きすることができます。
export default {
  component: Button,
  args: { children: "送信する" },
} as ComponentMeta<typeof Button>;

type Story = ComponentStoryObj<typeof Button>;

export const Default: Story = {};

export const Large: Story = {
  args: { variant: "large" },
};

export const Small: Story = {
  args: { variant: "small" },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const Dark: Story = {
  args: { theme: "dark" },
};

export const Light: Story = {
  args: { theme: "light" },
};

export const Transparent: Story = {
  args: { theme: "transparent" },
};

export const Blue: Story = {
  args: { theme: "blue" },
};

export const Error: Story = {
  args: { theme: "error" },
};
