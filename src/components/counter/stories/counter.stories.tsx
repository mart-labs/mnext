import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Counter } from "../counter";
import { H1 } from "../../typography/h1";
import { ArrowUp, ArrowDown } from "lucide-react";

const meta = {
  title: "Components/Counter",
  component: Counter,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  args: {
    direction: "up",
  },

  decorators: [
    (Story, { args }) => {
      return (
        <div className="w-full py-10 items-center flex justify-center flex-col">
          <H1 className="flex gap-1 items-center">
            {args.direction === "up" ? (
              <ArrowUp className="w-5 h-5 stroke-[1.5px] opacity-70 text-green-600" />
            ) : (
              <ArrowDown className="w-5 h-5 stroke-[1.5px] opacity-70 text-red-500" />
            )}
            <Story />
          </H1>
        </div>
      );
    },
  ],
} satisfies Meta<typeof Counter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CounterDefault: Story = {
  args: {
    value: 1000,
  },
};

export const CounterDowm: Story = {
  args: {
    value: 1000,
    direction: "down",
  },
};

export const CounterUp: Story = {
  args: {
    value: 1000,
    direction: "up",
  },
};
