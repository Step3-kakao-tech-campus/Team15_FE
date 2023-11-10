import { Link } from "react-router-dom";
import { Icon } from "../common/Icon.component.jsx";
import { Txt } from "../common/Txt.component.jsx";
import { ProductDto } from "../../apis/dtos/product.dto.js";
import { koString } from "../../functions/localeString.js";

/**
 * @param {object} props
 * @param {ProductDto} props.data
 * @returns {React.FC}
 */
export const ProductItem = ({ data }) => {
  return (
    <Link
      className="flex w-full items-center gap-4 py-4 text-left"
      to={`/product/${data.id}`}
    >
      <div className="flex-1 overflow-hidden">
        <img
          className="aspect-square object-cover"
          src={data.productImagePath[0]}
          alt={data.productName}
        />
      </div>
      <div className="flex h-24 min-w-0 flex-[2_0_0] flex-col justify-between">
        <div className="flex w-full flex-col gap-1">
          <Txt typography="h6" className="truncate">
            {data.productName}
          </Txt>
          <Txt
            typography="subtitle"
            colors="secondaryLight"
            className="truncate font-light"
          >
            {data.location}
          </Txt>
        </div>
        <div className="flex w-full justify-between">
          <Txt typography="h6" colors="secondary" className="truncate">
            {`${koString(data.rentalPrice)} 원 / 일`}
          </Txt>
          <div className="flex items-center gap-1">
            <Icon type="message" size="small" />
            <Txt typography="p">{data.review}</Txt>
          </div>
        </div>
      </div>
    </Link>
  );
};
