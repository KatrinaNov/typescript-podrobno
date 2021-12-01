import React, {useState} from 'react';
import {UncontrolledOnOff} from "./UncontrolledOnOff";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Uncontrolled OnOff',
  component: UncontrolledOnOff,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const ModeChanging = () => {
  const [value, setValue] = useState<boolean>(true)
  return <UncontrolledOnOff onChange={setValue}/>;
}


