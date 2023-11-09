import { Suspense } from "react";
import { useParams } from "react-router-dom";
import { ErrorBoundary } from "../../components/common/Errorboundary.component.jsx";
import { MainContainer } from "../../components/common/MainContainer.component.jsx";
import { AppBar } from "../../components/common/AppBar.component.jsx";
import { ProductListByCategory } from "../../components/product/ListByCategory.component.jsx";

const categorys = ["IT", "도서", "의류", "악기"];

export const ProductCategoryPage = () => {
  const { id } = useParams();

  return (
    <>
      <AppBar to="/" title={categorys.at(+id - 1) ?? "IT"} br={false} />
      <MainContainer hasBottomFullLink={false}>
        <ErrorBoundary>
          <Suspense fallback={<></>}>
            <ProductListByCategory category={id} />
          </Suspense>
        </ErrorBoundary>
      </MainContainer>
    </>
  );
};
