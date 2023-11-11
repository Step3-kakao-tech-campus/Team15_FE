import { ko } from "date-fns/locale";
import { DayPicker } from "react-day-picker";
import { differenceInBusinessDays } from "date-fns";
import { useAtom } from "jotai";
import { Txt } from "../../common/Txt.component.jsx";
import { rentDateAtom } from "../../../stores/rent.atom.js";
import "react-day-picker/dist/style.css";
import "./calender.css";

export const RentCalendar = () => {
  const [value, onChange] = useAtom(rentDateAtom);

  /** @param {import('react-day-picker').DateRange} value */
  const calenderChange = (value) => {
    // if (differenceInBusinessDays(value.to, value.from) === 0) return;
    onChange(value);
  };

  return (
    <div className="flex h-full flex-col items-center justify-evenly">
      <DayPicker
        mode="range"
        fromDate={new Date()}
        defaultMonth={new Date()}
        selected={value}
        onSelect={calenderChange}
        locale={ko}
      />
      <div className="w-full">
        <Txt typography="h4" className="w-full text-left font-normal">
          대여기간
        </Txt>
        <div className="flex items-center justify-around border-b border-black py-4">
          <Txt typography="h5" className="h-4 flex-1 text-center  font-normal">
            {value?.from?.toLocaleDateString()}
          </Txt>
          <div className="h-[1px] w-4 bg-black"></div>
          <Txt typography="h5" className="h-4 flex-1 text-center font-normal">
            {value?.to?.toLocaleDateString()}
          </Txt>
        </div>
      </div>
    </div>
  );
};
