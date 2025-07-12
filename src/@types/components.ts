import { ComponentType, ReactNode } from "react";

interface imgType {
  src: string;
  alt: string;
  height: number;
  width: number;
  text: string;
}

interface carouselType {
  img: Array<imgType>;
  classNameCarousel: string;
  classNameDivImg: string;
  classNameImg: string;
  classNameDivBtn: string;
  classNameBtn: string;
}

interface cardsType {
  classCards: string;
  classCard: string;
  classImg: string;
  classDivButtons: string;
  classButtons: string;
  classText: string;
  img: Array<imgType>;
}

type ImageObjType = Pick<cardsType, "img">;

interface carouselVidType {
  vid: Array<videoType>;
  classNameDiv: string;
  classNameVideo: string;
  classNameDivBtn: string;
  classNameBtn: string
}

interface videoType {
  height: string;
  width: string;
  controls: boolean;
  autoplay: boolean;
  loop: boolean;
  source: { src: string, type: string };
}

interface mainType {
  classNameMain: string;
  classNameNavbarMain: string;
  classNameBodyMain: string;
  children1: ReactNode;
  children2: ReactNode;
}

interface bodyMainType {
  classNameBodyMain: string;
  classNameText: string;
  classList: string;
  state: string;
  text: Array<{ id: string; page: ReactNode }>;
  experience: Array<{ id: string; impresa: string; value: string }>;
}

interface divColType {
  classNameDivCol: string;
  classNameImgCol: string;
  classNameTriangle: string;
  Triangle: ComponentType<{ className: string }>;
}

interface squareFooterType {
  classDivPropertyFooter: string;
  classNamePropertyFooter: string;
  classImg?: string;
  classValuePropertyFooter: string;
  properties: Array<propertyType>;
}

interface footerTypes {
  data: Array<dataTypes>;
}

interface dataTypes {
  name: string;
  value: string;
  src: string;
}

interface propertyType {
  name: string;
  value: string;
  pathImg: string | null;
}

export type {
  carouselType,
  mainType,
  bodyMainType,
  divColType,
  squareFooterType,
  footerTypes,
  dataTypes,
  carouselVidType,
  videoType,
  cardsType,
  imgType,
  ImageObjType
};
