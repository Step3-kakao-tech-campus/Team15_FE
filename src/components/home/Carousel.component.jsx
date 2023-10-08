import { Carousel } from "../common/Carousel.component";

export const HomeCarousel = () => {
  const carouselData = [
    { img: { src: "https://placehold.co/600x400", alt: "placeholder1" } },
    { img: { src: "https://placehold.co/600x400", alt: "placeholder2" } },
    { img: { src: "https://placehold.co/600x400", alt: "placeholder3" } },
  ];
  return <Carousel data={carouselData} />;
};
