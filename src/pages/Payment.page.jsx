import { useParams } from "react-router-dom";
import { AppBar } from "../components/common/AppBar.component";
import { Payment } from "../components/payment/Payment.component";
import { MainContainer } from "../components/common/MainContainer.component";
import { BottomFullLink } from "../components/common/BottomFullLink.component";
import { useAtom } from "jotai";
import { canPayByMoney } from "../stores/payment.atom";
import { PaymoneyProduct } from "../components/payment/Product.component";

export const PaymentPage = () => {
  const { id } = useParams();

  const [canPay] = useAtom(canPayByMoney);

  return (
    <>
      <AppBar to={`/rent/${id}`} title="결제하기" br={true} />
      <MainContainer>
        <PaymoneyProduct id={id} />
        <Payment />
        <BottomFullLink title="결제하기" to={`/rent/${id}`} isActive={canPay} />
      </MainContainer>
    </>
  );
};
