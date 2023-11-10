import { AppBar } from "../components/common/AppBar.component";
import { MainContainer } from "../components/common/MainContainer.component";
import { MyPageInfo } from "../components/mypage/Info.component";
import { MyPageMenu } from "../components/mypage/Menu.component";
import classnaems from "classnames";
import { MOBILE_WIDTH } from "../constants";
import { isMobile } from "react-device-detect";
import { Suspense } from "react";
import { ErrorBoundary } from "../components/common/Errorboundary.component";

export const MyPage = () => {
  return (
    <>
      <AppBar to="/" />
      <MainContainer>
        <ErrorBoundary>
          <Suspense fallback={<></>}>
            <MyPageInfo />
          </Suspense>
        </ErrorBoundary>
        <div
          className={classnaems(
            "left-0 h-full bg-gray-100 py-4",
            !isMobile && MOBILE_WIDTH
          )}
        >
          <MyPageMenu />
        </div>
      </MainContainer>
    </>
  );
};
