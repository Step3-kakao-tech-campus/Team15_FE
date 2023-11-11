import classnames from "classnames";
import { isMobile } from "react-device-detect";
import {
  BASE_LEFT_PADDING_MINUS,
  MOBILE_WIDTH,
} from "../../constants/index.js";

/**
 * @param {{
 *  className?: string,
 * innerClassName?: string
 * }}
 */
export const Br = ({ className, innerClassName }) => {
  return (
    <div className={classnames("relative h-[1px]", className)}>
      <span
        className={classnames(
          "absolute h-[1px] w-[calc(100%+3rem)] bg-[#D4D4D4]",
          BASE_LEFT_PADDING_MINUS,
          !isMobile ? MOBILE_WIDTH : "w-[calc(100%+3rem)]",
          innerClassName
        )}
      ></span>
    </div>
  );
};
