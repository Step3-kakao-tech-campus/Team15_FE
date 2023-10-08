import { useParams } from "react-router-dom";
import { AppBar } from "../components/common/AppBar.component";
import { RentCalendar } from "../components/rent/Calender.component";
import { BottomFullLink } from "../components/common/BottomFullLink.component";
import { MainContainer } from "../components/common/MainContainer.component";

export const RentPage = () => {
  const { id } = useParams();
  return (
    <>
      <AppBar to={`/product/${id}`} title={"대여날짜"} br={true} />
      <MainContainer>
        <RentCalendar />
        <BottomFullLink title="결제하기" to={`/payment/${id}`} />
      </MainContainer>
    </>
  );
};
