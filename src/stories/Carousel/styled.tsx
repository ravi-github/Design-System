import styled from "styled-components";
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Select from 'react-select';
import { Zoom_Factor, Slide_Transition } from "./constants";

const NavigationBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: auto;
  margin: 50px;
`;

const NavigationButton = styled(Button)`
  width: 15%;
  margin-right: 50px;
`;

const CarouselContainer = styled.div`
  display: flex;
  width: calc(100% - 100px);
  padding-top: 50px;
  height : 1500px;
  margin: 50px;
  overflow: hidden;
`;

const CarouselItem = styled.div<any>`
  flex-basis: calc(100% / 3);
  flex-shrink: 0;
  transition: all ${Slide_Transition};
  transition-property: transform , z-index;
  transform: translateX(${ (props) => props.translate}px);
  z-index: ${ (props) => (props.isCenterItem) ? 100 : 1};
`;

const CarouselInfoContainer = styled.div`
  display: flex;
  flex-direction: column;   
  align-items: center;
  margin-top: 50px;
  padding: 40px;
  background: white;
  &:nth-child(4) {
    background: orange;
  }
`;

const Img = styled("img")<any>`
  width: 100%;
  height: 300px;
  transition: all ${Slide_Transition};
  transition-property: transform;
  transform: scale(${ (props) => (props.isCenterItem) ? Zoom_Factor : (props.scale)});
`;

const ModifiedSelect = styled(Select)`
    width: 800px;
    margin: auto;
    z-index: 2000;
`;

const NameBadge = styled(Badge)`
    color: black;
    padding: 10px;
    background: lightsalmon;
`;

const PriceBadge = styled(Badge)`
    margin: 20px 0px;
    padding: 10px;
`;

const PrimaryDescription = styled.div`
    flex: 0 0 350px; 
    font-family: "Times New Roman",Times,serif;
    font-size: 18px;
    background: lightcyan;
    padding: 40px;
`;

const SecondaryDescription = styled.div`
    flex: 0 0 350px;
    font-family: "Times New Roman", Times, serif;
    font-size: 18px;
    margin-top: 40px;
    background: lightyellow;
    padding: 40px;
`;


export { NavigationBar, NavigationButton, CarouselContainer, CarouselItem, CarouselInfoContainer, Img,
         NameBadge, PriceBadge, PrimaryDescription, SecondaryDescription, ModifiedSelect };

