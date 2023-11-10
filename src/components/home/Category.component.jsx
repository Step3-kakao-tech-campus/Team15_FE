import { Link } from "../common/Link.component.jsx";
import { Txt } from "../common/Txt.component.jsx";

const categorys = [
  { id: 1, title: "IT", imgSrc: "/images/categorys/it.png" },
  { id: 2, title: "도서", imgSrc: "/images/categorys/book.png" },
  { id: 3, title: "의류", imgSrc: "/images/categorys/suit.png" },
  { id: 4, title: "악기", imgSrc: "/images/categorys/instrument.png" },
];

export const HomeCategory = () => {
  return (
    <div className="flex justify-between gap-4">
      {categorys.map((category) => (
        <Link
          key={category.title}
          to={`/product/category/${category.id}`}
          className="flex flex-1 flex-col items-center rounded-2xl bg-[#F1F1F1] px-4 py-2 "
        >
          <img
            src={category.imgSrc}
            alt={category.title}
            className="h-full w-full p-2"
          />
          <Txt className="text-sm">{category.title}</Txt>
        </Link>
      ))}
    </div>
  );
};
