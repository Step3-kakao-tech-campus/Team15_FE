import { ProductDetailPage } from "../src/pages/product/ProductDetail.page.jsx";
import { RentPeriodPage } from "../src/pages/product/ProductRent.page.jsx";
import { PaymentPage } from "../src/pages/product/Payment.page.jsx";
import { ProductCategoryPage } from "../src/pages/product/Category.page.jsx";
import { ProductSearchPage } from "../src/pages/product/ProductSearch.page.jsx";

const productRouter = [
  {
    path: "/product/:id",
    element: <ProductDetailPage />,
  },
  {
    path: "/rent-period/:id",
    element: <RentPeriodPage />,
  },
  {
    path: "/payment/:id",
    element: <PaymentPage />,
  },
  {
    path: "/product/category/:id",
    element: <ProductCategoryPage />,
  },
  {
    path: "/product/search",
    element: <ProductSearchPage />,
  },
];

export default productRouter;
