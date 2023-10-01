import { Br } from "../common/Br.component";
import { Txt } from "../common/Txt.component";
import { ProductItem } from "./Item.component";

const products = [
  {
    id: "733d7309-5ab8-47d2-98e6-4843e497418f",
    category: "IT",
    productImagePath: ["https://placehold.co/600x400"],
    title: "아이패드",
    rentalPrice: 40000,
    regularPrice: 12000000,
    location: "전남대 제 1학생회관",
    commentCount: 4,
  },
  {
    id: "733d7309-5ab8-47d2-98e6-4843e497418g",
    category: "IT",
    productImagePath: ["https://placehold.co/600x400"],
    title: "아이패드",
    rentalPrice: 40000,
    regularPrice: 12000000,
    location: "전남대 제 1학생회관",
    commentCount: 4,
  },
  {
    id: "733d7309-5ab8-47d2-98e6-4843e497418e",
    category: "IT",
    productImagePath: ["https://placehold.co/600x400"],
    title: "아이패드",
    rentalPrice: 40000,
    regularPrice: 12000000,
    location: "전남대 제 1학생회관",
    commentCount: 4,
  },
];

export const ProductList = () => {
  return (
    <section>
      <Br />
      {products.map((product) => (
        <>
          <ProductItem data={product} />
          <Br />
        </>
      ))}
      <Txt
        typography="h4"
        colors="secondary"
        className="flex justify-center text-center py-4"
      >
        더이상 제품이 없어요
      </Txt>
    </section>
  );
};
