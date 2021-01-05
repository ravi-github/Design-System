export type StyledType = {
    translate: number;
    startIndex: number;
    src: any;
  };
  
export type CarouselProps = {   
  carouselData: CarouselItemType[];
  scale: number;
};
  
export type CarouselItemType = {
  image: any,
  name: string;
  price: number;
  category: string;
  descriptionPrimary: string;
  descriptionSecondary: string;
};

export type DropDownOption = {
  label: string;
  value: string;
};

