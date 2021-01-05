
import { CarouselProps } from "./types"; 

export const Carousel = ({carouselDataList}: CarouselProps) => {

  return (
    <>
    {carouselDataList.map( () => {
      return (
        <>Trial</>
      );
    } )}
    </>
  );
};