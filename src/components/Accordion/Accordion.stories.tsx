import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";
import {OnOff} from "../OnOff/OnOff";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Accordion',
  component: Accordion,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;
const callback = action('clicked')
export const CollapsedMode = () => <Accordion titleValue={'Menu'} collapsed={true} toggleAccordion={callback}/>;
export const UncollapsedMode = () => <Accordion titleValue={'Questions'} collapsed={false} toggleAccordion={callback}/>;

export const ModeChanging = () => {
  const [value, setValue] = useState<boolean>(true)
  return <Accordion titleValue={'Menu'} collapsed={value} toggleAccordion={() => setValue(!value)}/>;
}

