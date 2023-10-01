import { Br } from "../common/Br.component";
import { Carousel } from "../common/Carousel.component";
import { ProductCompany } from "./Company.component";
import { Txt } from "../common/Txt.component";

/**
 * @param {{
 *  id: string
 * }}
 */
export const ProductDetail = ({ id }) => {
  const {
    name,
    content,
    rentalPrice,
    regularPrice,
    location,
    category,
    companyName,
    productImagePath,
    companyImagePath,
  } = {
    id: "733d7309-5ab8-47d2-98e6-4843e497418f",
    category: "IT",
    name: "아이패드",
    rentalPrice: "40000",
    regularPrice: "12000000",
    content: "장난 아닌 아이패드입니다",
    review: "4",
    location: "전남대 제 1학생회관",
    productImagePath: [
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
    ],
    companyName: "학생복지스토어",
    companyImagePath: "https://placehold.co/400x400",
  };

  const carouselData = productImagePath.map((src, index) => ({
    img: { src, alt: `${name}${index}` },
  }));

  return (
    <>
      <Carousel data={carouselData} />
      <div className="py-4">
        <ProductCompany name={companyName} imagePath={companyImagePath} />
      </div>
      <Br />
      <article className="my-4">
        <Txt typography="h5">{name}</Txt>
        <div className="flex items-baseline justify-between">
          <Txt typography="h2">{`${rentalPrice} / 월`}</Txt>
          <Txt typography="subtitle">{`정가: ${regularPrice}원~`}</Txt>
        </div>
        <Txt
          typography="p"
          colors="secondaryLight"
          className="flex gap-2 items-center my-1"
        >
          {category}
          <div className="h-[2px] w-[2px] rounded-full bg-[#707070]"></div>
          {location}
        </Txt>
        <div className="my-4">{content}</div>
        <div className="w-[clac(3rem + env(safe-area-inset-bottom))]"></div>
      </article>
    </>
  );
};
