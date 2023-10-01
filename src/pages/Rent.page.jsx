import classnames from "classnames";
import { useParams } from "react-router-dom";
import { AppBar } from "../components/common/AppBar.component";
import { BASE_PADDING } from "../constants";
import { isIOS, isMobile } from "react-device-detect";
import { RentCalendar } from "../components/rent/Calender.component";
import { BottomFullLink } from "../components/common/BottomFullLink.component";

export const RentPage = () => {
  const { id } = useParams();
  return (
    <>
      <AppBar to={`/product/${id}`} title={"대여날짜"} br={true} />
      <main
        aria-label="main"
        className={classnames(
          "bg-white overflow-auto",
          BASE_PADDING,
          isMobile && isIOS
            ? "h-[calc(100vh-10rem-env(safe-area-inset-top))]"
            : "h-[calc(100vh-8.5rem)]"
        )}
      >
        <RentCalendar />
        <BottomFullLink title="결제하기" to={`/payment/${id}`} />
      </main>
    </>
  );
};
