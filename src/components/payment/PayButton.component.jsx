import classnames from "classnames";
import { isMobile } from "react-device-detect";
import { useState } from "react";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";
import { canPayByMoney } from "../../stores/payment.atom.js";
import { Button } from "../common/Button.component.jsx";
import { Modal } from "../common/Modal.component.jsx";
import { Txt } from "../common/Txt.component.jsx";
import { rentDateAtom } from "../../stores/rent.atom.js";
import { useCreateRental } from "../../hooks/useRentalQuery.jsx";

/**
 * @param {{
 *  productId: string
 * }} param0
 */
export const PaymentPayButton = ({ productId }) => {
  const [canPay] = useAtom(canPayByMoney);
  const [rentData, setRentData] = useAtom(rentDateAtom);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const navigate = useNavigate();
  const { mutationRental } = useCreateRental();

  const onModalClose = () => {
    setRentData({ from: new Date(), to: null });
    setIsOpenModal(false);
    navigate("/");
  };

  const onCreateRental = () => {
    mutationRental(
      {
        productId,
        date: {
          startAt: rentData.from,
          endAt: rentData.to,
        },
      },
      { onSettled: () => setIsOpenModal(true) }
    );
  };

  return (
    <div
      className={classnames(
        "fixed bottom-0 z-20 bg-white px-6",
        isMobile
          ? "w-[calc(100%-3rem)] pb-[env(safe-area-inset-bottom)]"
          : "w-[480px] -translate-x-6 py-4"
      )}
    >
      <Button isActive={canPay} onClick={onCreateRental}>
        결제하기
      </Button>
      <Modal.Alert
        isOpen={isOpenModal}
        onClose={onModalClose}
        onRequestClose={onModalClose}
      >
        <Txt>결제가 완료되었습니다.</Txt>
      </Modal.Alert>
    </div>
  );
};
