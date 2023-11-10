import classnames from "classnames";
import { isMobile } from "react-device-detect";
import { BASE_PADDING, MOBILE_WIDTH } from "../../constants/index.js";
import { Icon } from "../common/Icon.component.jsx";
import { Txt } from "../common/Txt.component.jsx";
import { Menu } from "./Menu.component.jsx";
import { Link } from "../common/Link.component.jsx";

export const HomeHeader = () => {
  return (
    <div className="h-14">
      <div
        className={classnames(
          "fixed z-40 flex justify-between border-b bg-white pb-2 pt-4",
          BASE_PADDING,
          !isMobile ? `${MOBILE_WIDTH}` : "left-0 w-full "
        )}
      >
        <div className="flex gap-4">
          <Menu />
          <Txt typography="h6">전남대</Txt>
        </div>
        <Link to="/search">
          <Icon type="search" />
        </Link>
      </div>
    </div>
  );
};
