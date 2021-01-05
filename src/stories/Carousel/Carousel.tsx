import React from 'react'; // trial
import{ NavigationBar, NavigationButton, CarouselContainer, CarouselItem, CarouselInfoContainer, Img,
        NameBadge, PriceBadge, PrimaryDescription, SecondaryDescription, ModifiedSelect } from "./styled";
import  { CarouselItemType, CarouselProps, DropDownOption } from "./types";
import { pluck } from "./utils";

const formDropdownOptions = (carouselData: CarouselItemType[]): DropDownOption[] => {
  let categoryValues: string[] = pluck(carouselData, "category"); 
  let dropDownOptions: DropDownOption[] = [];
  categoryValues = [...new Set(categoryValues)];
  categoryValues.forEach( (categoryValue: string) => {
    dropDownOptions.push({ value: categoryValue, label: categoryValue });
  });
  return dropDownOptions;
};

const Carousel = ({
  carouselData,
  scale
}: CarouselProps) => {
  const [startIndex, setStartIndex] = React.useState(0);    
  const [selectedOptions, setSelectedOptions] = React.useState<string[]>([]);    
  const [, setWidth] = React.useState(window.innerWidth);
  let carouselDataFiltered: CarouselItemType[] = [];
  const dropDownOptions: DropDownOption[] = formDropdownOptions(carouselData);
  const contRef = React.useRef<HTMLDivElement>(document.createElement("div"));
  const width = ( contRef.current.offsetWidth / 3);
  if(selectedOptions && selectedOptions.length > 0) {
    carouselDataFiltered = carouselData.filter( (data: CarouselItemType) => { 
      return (selectedOptions.includes(data.category));
    });
  } else {
    carouselDataFiltered = JSON.parse(JSON.stringify(carouselData));
  }
  const reachedStartOfCarousel = ( startIndex ===  0 );
  const reachedEndOfCarousel = (startIndex === ( carouselDataFiltered.length - 3) );

  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);
  const goToPrevious = () => {
    setStartIndex( (startIndex - 1) % carouselData.length );
  };
  const goToNext = () => {
    setStartIndex( (startIndex + 1) % carouselData.length );
  };
  const handleChange = (selectedDropDownOptions: DropDownOption[]) => {
    let selectedOptions: string[];
    if(selectedDropDownOptions) {
      selectedOptions = pluck(selectedDropDownOptions, "value");
      setStartIndex(0);
      setSelectedOptions(selectedOptions);
    } else {
      setStartIndex(0);
      setSelectedOptions([]);
    }
  };

  return (
    <>
      <ModifiedSelect   
        onChange={handleChange}
        isMulti
        name="category"
        options={dropDownOptions}
        className="basic-multi-select"
        classNamePrefix="select"
      />
      <NavigationBar>
        <NavigationButton variant="primary" disabled={reachedStartOfCarousel} 
                          onClick={goToPrevious}>Previous</NavigationButton>
        <NavigationButton variant="primary" disabled={reachedEndOfCarousel}
                          onClick={goToNext}>Next</NavigationButton>
      </NavigationBar>
      <CarouselContainer ref={contRef}>
          {carouselDataFiltered.map( (imageData: any, i: number) => {
            let display: React.ReactNode;
            const isCenterItem = (i === startIndex + 1) ? true : false;
            const show = ( (i >= startIndex) && (i < (startIndex + 3)) ) ? true : false;
            const { image, name, price, category, descriptionPrimary, descriptionSecondary } = imageData;
            display = (
              <CarouselItem key={i} show={show} isCenterItem={isCenterItem} 
                          translate={- width * startIndex} startIndex={startIndex}>
                  <Img src={image} isCenterItem={isCenterItem} scale={scale} ></Img>
                  <CarouselInfoContainer>
                    <NameBadge variant="success">{name.toUpperCase()} ({category})</NameBadge>
                    <PriceBadge variant="info">${price}</PriceBadge>
                    <PrimaryDescription>{descriptionPrimary}</PrimaryDescription>
                    <SecondaryDescription>{descriptionSecondary}</SecondaryDescription>
                  </CarouselInfoContainer>
              </CarouselItem>
            );
            return display;
          })}
      </CarouselContainer>
    </>  
  );
};

export { Carousel };