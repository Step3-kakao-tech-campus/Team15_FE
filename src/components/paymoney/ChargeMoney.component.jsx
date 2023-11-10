import { useState } from "react";
import { useAtom } from "jotai";
import { chargeMoney } from "../../stores/paymoney.atom.js";
import { Txt } from "../common/Txt.component.jsx";
import { CommonModal } from "../common/Modal.component.jsx";
import classNames from "classnames";
import { BASE_PADDING, MOBILE_WIDTH } from "../../constants/index.js";
import { isMobile } from "react-device-detect";
import { Icon } from "../common/Icon.component.jsx";

const keypadPositions = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "00",
  "0",
  "delete",
];

export const ChargeMoney = () => {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [inputValue, setInputValue] = useAtom(chargeMoney);

  const onKeyboard = () => {
    setIsKeyboardOpen(true);
  };

  const closeKeyboard = () => {
    setIsKeyboardOpen(false);
  };

  const onkeypadClick = (value) => {
    switch (value) {
      case "delete":
        setInputValue(inputValue.slice(0, -1));
        break;
      case "00":
        setInputValue(inputValue + "00");
        break;
      default:
        setInputValue(inputValue + value);
        break;
    }
  };

  return (
    <>
      <button
        onClick={onKeyboard}
        className="my-4 flex w-full flex-col gap-2 rounded-lg bg-[#F1F1F1] px-8 py-4 "
      >
        <Txt className="float-left mr-4 min-w-fit text-gray-500">충전금액</Txt>
        <input
          className="w-full bg-transparent text-4xl"
          type="text"
          value={inputValue}
          readOnly
        />
      </button>
      <CommonModal
        isOpen={isKeyboardOpen}
        onRequestClose={closeKeyboard}
        overLayCss={{
          backgroundColor: "transparent",
          display: "flex",
          alignItems: "flex-end",
        }}
        className={classNames(
          "h-fit bg-[#F8F9FA]",
          isMobile ? "w-full" : MOBILE_WIDTH,
          BASE_PADDING
        )}
      >
        <div className="mb-20 grid grid-cols-3 text-center">
          {keypadPositions.map((keypad, index) => (
            <button
              className="flex items-center justify-center py-6"
              onClick={() => onkeypadClick(keypad)}
            >
              {keypad === "delete" ? (
                <Icon type="delete" />
              ) : (
                <Txt typography="h4" key={index}>
                  {keypad}
                </Txt>
              )}
            </button>
          ))}
        </div>
      </CommonModal>
    </>
  );
};
