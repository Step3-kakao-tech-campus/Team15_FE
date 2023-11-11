import { isMobile } from "react-device-detect";
import classnames from "classnames";
import { Br } from "../common/Br.component.jsx";
import { Button } from "../common/Button.component.jsx";
import { Link } from "./Link.component.jsx";

/**
 * @param {{
 *  onClick?: () => void
 *  to: string
 *  title: string
 *  br: boolean
 *  isActive: boolean
 * }}
 */
export const BottomFullLink = ({
  onClick,
  br = false,
  title,
  to,
  isActive = true,
}) => {
  return (
    <div
      className={classnames(
        "fixed bottom-0 z-20 bg-white px-6",
        isMobile
          ? "w-[calc(100%-3rem)] pb-[env(safe-area-inset-bottom)]"
          : "w-[480px] -translate-x-6 py-4"
      )}
    >
      {br && <Br className="bg-white pb-3" />}
      <Link to={to} onClick={onClick}>
        <Button isActive={isActive}>{title}</Button>
      </Link>
    </div>
  );
};
