import { Link } from "react-router-dom";
import { Icon } from "../common/Icon.component";
import { Txt } from "../common/Txt.component";

/**
 * @param {{
 *  data: {
 *    id: string,
 *    category: string,
 *    productImagePath: string[],
 *    title: string,
 *    rentalPrice: number,
 *    regularPrice: number,
 *    location: string,
 *    commentCount: number,
 *  }
 * }}
 */
export const ProductItem = ({ data }) => {
  const {
    category,
    commentCount,
    id,
    location,
    productImagePath,
    regularPrice,
    rentalPrice,
    title,
  } = data;

  return (
    <Link className="py-4 flex gap-4 text-left w-full" to={`/product/${id}`}>
      <div className="h-20 w-20 overflow-hidden">
        <img src={productImagePath[0]} alt={title} />
      </div>
      <div className="flex flex-col h-20 justify-between flex-1">
        <div className="flex flex-col gap-1 w-full truncate">
          <Txt typography="h6">{title}</Txt>
          <Txt
            typography="subtitle"
            colors="secondaryLight"
            className="font-light"
          >
            {location}
          </Txt>
        </div>
        <div className="flex w-full justify-between">
          <Txt typography="h6" colors="secondary">
            {`${rentalPrice} / 월`}
          </Txt>
          <div className="flex items-center gap-1">
            <Icon type="message" size="small" />
            <Txt typography="p">{commentCount}</Txt>
          </div>
        </div>
      </div>
    </Link>
  );
};
