import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Carousel, CarouselProps } from './Carousel';

export default {
  title: 'Components/Carousel',
  component: Carousel,
} as Meta;

const Template: Story<CarouselProps> = (args) => <Carousel {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

