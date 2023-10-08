import Calendar from "react-calendar";
import { Icon } from "../common/Icon.component";
import { Txt } from "../common/Txt.component";
import { useAtom } from "jotai";
import { rentDateAtom } from "../../stores/rent.atom";
import "./calender.css";

/**
 * @param {Date | Date[]} date
 * @param {number} index
 */
const getLoaclString = (date, index) => {
  if (!Array.isArray(date)) {
    return date.toLocaleDateString();
  }
  if (date[index] === null) {
    return date[0].toLocaleDateString();
  }
  return date[index].toLocaleDateString();
};

export const RentCalendar = () => {
  const [value, onChange] = useAtom(rentDateAtom);

  return (
    <div className="h-full flex flex-col items-center">
      <Calendar
        className="my-12"
        onChange={onChange}
        value={value}
        returnValue="range"
        selectRange={true}
        allowPartialRange={true}
        locale="ko-KR"
        calendarType="gregory"
        minDetail="month"
        maxDetail="month"
        minDate={new Date()}
        prevLabel={<Icon type="back" />}
        nextLabel={<Icon className="rotate-180" type="back" />}
        formatDay={(_, date) => date.getDate()}
        formatMonthYear={(_, date) => `${date.getMonth() + 1}월`}
      />
      <div className="w-full">
        <Txt typography="h4" className="font-normal w-full text-left">
          대여기간
        </Txt>
        <div className="flex justify-around items-center border-b border-black py-4">
          <Txt typography="h5" className="font-normal">
            {getLoaclString(value, 0)}
          </Txt>
          <div className="h-[1px] w-4 bg-black"></div>
          <Txt typography="h5" className="font-normal">
            {getLoaclString(value, 1)}
          </Txt>
        </div>
      </div>
    </div>
  );
};
