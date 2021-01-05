import React from 'react';

export interface CarouselProps {
  message: string;
}

export const Carousel: React.FC<CarouselProps> = ({
  message
}) => {
  return (
      <>Hello {message}</>
    );
};
