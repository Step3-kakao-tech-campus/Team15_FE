import classnames from "classnames";
import { BASE_PADDING, MOBILE_WIDTH } from "../../constants";
import { isMobile } from "react-device-detect";
import { Icon } from "../common/Icon.component";
import { Link } from "../common/Link.component";
import { SearchBar } from "./SearchBar.component";

export const SearchAppBar = () => {
  return (
    <div className="h-14">
      <div
        className={classnames(
          "fixed z-40 flex items-center justify-between gap-2 border-b bg-white pb-2 pt-4",
          BASE_PADDING,
          !isMobile ? `${MOBILE_WIDTH}` : "w-full"
        )}
      >
        <Link to="/">
          <Icon type="back" />
        </Link>
        <SearchBar />
      </div>
    </div>
  );
};
