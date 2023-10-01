import { isMobile } from "react-device-detect";
import { Br } from "../common/Br.component";
import { Button } from "../common/Button.component";
import classnames from "classnames";
import { MOBILE_WIDTH } from "../../constants";
import { Link } from "react-router-dom";

/**
 * @param {{
 *  to: string
 *  title: string
 *  br: boolean
 * }}
 */
export const BottomFullLink = ({ br = false, title, to }) => {
  return (
    <div
      className={classnames(
        "fixed bottom-0 z-20 bg-white",
        isMobile
          ? "w-[calc(100%-3rem)] pb-[env(safe-area-inset-bottom)]"
          : `${MOBILE_WIDTH} pb-4`
      )}
    >
      {br && <Br className="py-0 pb-3" />}
      <Link to={to}>
        <Button>{title}</Button>
      </Link>
    </div>
  );
};
