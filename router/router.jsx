import { createBrowserRouter } from "react-router-dom";
import { TestPage } from "../src/pages/Test.page";
import { HomePage } from "../src/pages/Home.page";
import { ProductDetailPage } from "../src/pages/ProductDetail.page";
import { RentPage } from "../src/pages/Rent.page";
import { PaymentPage } from "../src/pages/Payment.page";

const router = createBrowserRouter([
  {
    path: "/test",
    element: <TestPage />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/product/:id",
    element: <ProductDetailPage />,
  },
  {
    path: "/rent/:id",
    element: <RentPage />,
  },
  {
    path: "/payment/:id",
    element: <PaymentPage />,
  },
]);

export { router };
