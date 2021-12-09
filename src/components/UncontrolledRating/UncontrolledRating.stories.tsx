import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {UncontrolledRating} from "./UncontrolledRating";
import {action} from "@storybook/addon-actions";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Uncontrolled Rating',
  component: UncontrolledRating,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
}

const callback = action('rating changed in components')
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const UncontrollingRating = () => <UncontrolledRating defaultValue={0} onChange={callback}/>;
export const UncontrollingRating1 = () => <UncontrolledRating defaultValue={1} onChange={callback}/>;
export const UncontrollingRating2 = () => <UncontrolledRating defaultValue={2} onChange={callback}/>;
export const UncontrollingRating3 = () => <UncontrolledRating defaultValue={3} onChange={callback}/>;
export const UncontrollingRating4 = () => <UncontrolledRating defaultValue={4} onChange={callback}/>;
export const UncontrollingRating5 = () => <UncontrolledRating defaultValue={5} onChange={callback}/>;


