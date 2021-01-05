import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Carousel } from './Carousel';
import { carouselDataBeaches } from "./mock/mock-beaches";
import { carouselDataLaptops } from "./mock/mock-laptops";

export default {
  title: 'Components/Carousel',
  component: Carousel,
} as Meta;

export const Beaches = () => <Carousel carouselData={carouselDataBeaches} scale={1} />;
export const Laptops = () => <Carousel carouselData={carouselDataLaptops} scale={0.8} />;