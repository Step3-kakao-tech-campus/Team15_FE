import { Br } from "../common/Br.component.jsx";
import { Carousel } from "../common/Carousel.component.jsx";
import { ProductCompany } from "./Company.component.jsx";
import { Txt } from "../common/Txt.component.jsx";
import { useGetProductById } from "../../hooks/useProductQuery.jsx";
import { koString } from "../../functions/localeString.js";

/**
 * @param {{
 *  id: string
 * }}
 * @returns {React.FC}
 */
export const ProductDetail = ({ id }) => {
  const { product } = useGetProductById(id);

  const carouselData = product.productImagePath.map((src, index) => ({
    img: {
      src,
      alt: `${product.productName}${index}`,
      className: "w-full object-cover w-full aspect-[16/9]",
    },
  }));

  return (
    <>
      <Carousel data={carouselData} className="aspect-video object-cover" />
      <div className="py-4">
        <ProductCompany
          name={product.companyName}
          imagePath={product.companyImagePath}
        />
      </div>
      <Br />
      <article className="my-4">
        <Txt typography="h5">{product.productName}</Txt>
        <div className="flex items-baseline justify-between">
          <Txt typography="h2">{`${koString(product.rentalPrice)} / 일`}</Txt>
          <Txt typography="subtitle">{`정가: ${koString(
            product.regularPrice
          )}원~`}</Txt>
        </div>
        <Txt
          typography="p"
          colors="secondaryLight"
          className="my-1 flex items-center gap-2"
        >
          {product.category}
          <div className="h-[2px] w-[2px] rounded-full bg-[#707070]"></div>
          {product.location}
        </Txt>
        <div className="my-4 flex flex-col">
          {product.content.split("\n").map((line, index) => (
            <Txt key={index} className="min-h-[1rem]">
              {line}
            </Txt>
          ))}
        </div>
        <div className="w-[clac(3rem + env(safe-area-inset-bottom))]"></div>
      </article>
    </>
  );
};
