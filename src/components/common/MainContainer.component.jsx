import classnames from "classnames";
import { isIOS, isMobile } from "react-device-detect";
import { BASE_PADDING } from "../../constants/index.js";

/**
 * @param {{
 *  children: React.ReactNode
 *  hasBottomFullLink?: boolean
 * }}
 */
export const MainContainer = ({ children, hasBottomFullLink = false }) => {
  return (
    <main
      aria-label="main"
      className={classnames(
        "overflow-auto bg-white",
        BASE_PADDING,
        hasBottomFullLink
          ? isMobile && isIOS
            ? "h-[calc(100vh-10rem-env(safe-area-inset-top))]"
            : "h-[calc(100vh-9rem)]"
          : isMobile && isIOS
          ? "h-[calc(100vh-3.5rem-env(safe-area-inset-top))]"
          : "h-[calc(100vh-3.5rem)]"
      )}
    >
      {children}
    </main>
  );
};
