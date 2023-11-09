import { Fragment } from "react";
import { Br } from "../common/Br.component.jsx";
import { Txt } from "../common/Txt.component.jsx";
import { ProductItem } from "./Item.component.jsx";
import { useGetProductBySearch } from "../../hooks/useProductQuery.jsx";

/**
 * @param {string} category
 */
export const ProductBySerach = ({ search }) => {
  const { products } = useGetProductBySearch(search);

  return (
    <section>
      <Br />
      {products.map((product) => (
        <Fragment key={product.id}>
          <ProductItem data={product} />
          <Br />
        </Fragment>
      ))}
      <Txt
        typography="h4"
        colors="secondary"
        className="flex justify-center text-center pt-4 pb-8"
      >
        더이상 제품이 없어요
      </Txt>
    </section>
  );
};
