type StyledType = {
    translate: number;
    startIndex: number;
    src: any;
  };
  
type CarouselProps = {   
  carouselData: CarouselItemType[];
  scale: number;
};
  
type CarouselItemType = {
  image: any,
  name: string;
  price: number;
  category: string;
  descriptionPrimary: string;
  descriptionSecondary: string;
};

type DropDownOption = {
  label: string;
  value: string;
};

export { StyledType, CarouselProps, CarouselItemType, DropDownOption };  