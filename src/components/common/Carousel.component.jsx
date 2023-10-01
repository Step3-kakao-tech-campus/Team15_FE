import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./custom-carousel.css";

/**
 * @param {{
 *  data: {
 *    img: { src: string, alt: string },
 *  }[]
 * }}
 */
export const Carousel = ({ data: carouselData }) => {
  return (
    <Swiper
      className="home-carousel rounded-lg"
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
    >
      {carouselData.map((data) => (
        <SwiperSlide key={data.img.alt}>
          <img src={data.img.src} alt={data.img.alt} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
