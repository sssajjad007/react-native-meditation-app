export interface ITextProps {
  title: string;
}
export interface ISliderCardProps {
  sku: string;
  period: string;
  price: number;
  pricePerMonth: number;
  isFeatured: boolean;
}
export interface ICarouselProps {
  data: any;
  setActiveItem: any;
  dataLoaded: boolean;
}
