import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {ComponentStory} from "@storybook/react";
import Select from "./Select";
import {Accordion} from "../Accordion/Accordion";

export default {
  title: 'components/Select',
  component: Select,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;
// const callback = action('clicked')

// const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;
//
export const WithoutValue: ComponentStory<typeof Accordion> = (args) => {
  const [value, setValue] = useState<string | null>(null)
  return <Select {...args}
                 value={value}
                 onChange={setValue}
                 items={[
                   {title: "Kate", value: "1"},
                   {title: "Maks", value: "2"},
                   {title: "Vanya", value: "3"}]}
  />;
}

export const WithValue: ComponentStory<typeof Accordion> = (args) => {
  const [value, setValue] = useState<string | null>('2')
  return <Select {...args}
                 value={value}
                 onChange={setValue}
                 items={[
                   {title: "Kate", value: "1"},
                   {title: "Maks", value: "2"},
                   {title: "Vanya", value: "3"}]}
  />;
}

