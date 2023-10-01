import { HomeCarousel } from "../components/home/Carousel.component";
import { HomeCategory } from "../components/home/Category.component";
import { HomeHeader } from "../components/home/Header.component";
import { ProductList } from "../components/product/List.component";
import classnames from "classnames";
import { BASE_PADDING } from "../constants";
import { isIOS, isMobile } from "react-device-detect";

export const HomePage = () => {
  return (
    <>
      <HomeHeader />
      <main
        aria-label="main"
        className={classnames(
          "bg-white overflow-auto",
          BASE_PADDING,
          isMobile && isIOS
            ? "h-[calc(100vh-4rem-env(safe-area-inset-top))]"
            : "h-[calc(100vh-4rem)]"
        )}
      >
        <div className="my-6">
          <HomeCarousel />
        </div>
        <div className="my-8">
          <HomeCategory />
        </div>
        <ProductList />
      </main>
    </>
  );
};
