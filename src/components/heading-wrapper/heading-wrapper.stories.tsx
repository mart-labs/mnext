import type { Meta, StoryObj } from "@storybook/react";

import { HeadingWrapper } from "./heading-wrapper";
import { Button } from "../ui/button";

const meta = {
  title: "Components/Header",
  component: HeadingWrapper,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof HeadingWrapper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const header: Story = {
  args: {
    title: "Header",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam sit eligendi sint soluta facere, illo earum sequi dolores architecto ratione molestiae ipsum pariatur perspiciatis veniam molestias alias similique aspernatur nobis.",
    buttons: (
      <>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </>
    ),
  },
};
export const example: Story = {
  args: {
    borderBottom: true,
    title: "What does Vercel do?",
    description: (
      <>
        "Technically" newsletter founder Justin Gage explains how Vercel makes
        building web applications as easy as possible, powered by the frontend
        cloud.{" "}
        <a
          className="text-blue-500 hover:underline underline-offset-4"
          href="#"
        >
          View Post
        </a>
      </>
    ),
    buttons: (
      <>
        <span>Wednesday, May 10th 2023</span>
        <Button className="w-fit">Community</Button>
      </>
    ),
  },
};
