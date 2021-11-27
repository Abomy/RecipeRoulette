import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tabs } from './Tabs';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Tabs',
  component: Tabs,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Tabs>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tabs> = (args) => (
  <>
    <Tabs {...args} />
  </>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  tabs: [
    {
      id: 'Tab1',
      title: (
        <div
          css={`
            background-color: pink;
          `}
        >
          Hey im tab 1
        </div>
      ),
      content: <div>Some cool tab content</div>,
    },
    {
      id: 'Tab2',
      title: 'Sup im tab 2',
      content: <div>wow im different content</div>,
    },
  ],
};
