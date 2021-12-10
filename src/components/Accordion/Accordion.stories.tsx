import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";
import {OnOff} from "../OnOff/OnOff";
import {ComponentStory} from "@storybook/react";

const getCategoryObj = (categoryName: string) => ({
  table: {
    category: categoryName
  }
})

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'components/Accordion',
  component: Accordion,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    toggleAccordion: {...getCategoryObj('Events')},
    color: {...getCategoryObj('Colors')},
    titleValue: {...getCategoryObj('Main')},
    collapsed: {...getCategoryObj('Main')},
  },
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;
const callback = action('clicked')
const onClickCallback = action('some item was clicked')

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

export const CollapsedMode = Template.bind({})
CollapsedMode.args = {
  titleValue: 'Menu',
  collapsed: true,
  toggleAccordion: callback,
  items: [
    {title: "Kate", value: "1"},
    {title: "Maks", value: "2"},
    {title: "Vanya", value: "3"}]
}
export const UncollapsedMode = Template.bind({})
UncollapsedMode.args = {
  titleValue: 'Questions',
  collapsed: false,
  toggleAccordion: callback,
  items: [
    {title: "Kate", value: "1"},
    {title: "Maks", value: "2"},
    {title: "Vanya", value: "3"}]
}

export const ModeChanging: ComponentStory<typeof Accordion> = (args) => {
  const [value, setValue] = useState<boolean>(true)
  return <Accordion {...args}
                    collapsed={value}
                    toggleAccordion={() => setValue(!value)}
                    items={[
                      {title: "Kate", value: "1"},
                      {title: "Maks", value: "2"},
                      {title: "Vanya", value: "3"}]}/>;
}
ModeChanging.args = {
  titleValue: 'Users',
  onClick: onClickCallback
}

