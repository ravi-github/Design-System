import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Carousel } from './Carousel';
import { carouselDataBeaches } from "./mock/mock-beaches";
import { carouselDataLaptops } from "./mock/mock-laptops";

/* 
1. Carousel should have clickable left and right arrows
2. Each item should have item image, item name, item price and item category
3. Only three items should be visible at any point of time
4. Each click on arrow should animate and slide the carousel item
5. Center item should be highlighted and should be bigger in size compared to the other two items
6. Provide a mechanism to filter the items based on category
*/

export default {
  title: 'Components/Carousel',
  component: Carousel,
} as Meta;

export const Beaches = () => <Carousel carouselData={carouselDataBeaches} scale={1} />;
export const Laptops = () => <Carousel carouselData={carouselDataLaptops} scale={0.8} />;