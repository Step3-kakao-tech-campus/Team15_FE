import { Link } from "react-router-dom";
import { Icon } from "./Icon.component.jsx";
import { Txt } from "./Txt.component.jsx";
import { Br } from "./Br.component.jsx";

/**
 * @param {{
 *  to: string
 *  title: string
 *  br?: boolean
 * }}
 */
export const AppBar = ({ to, title, br = false }) => {
  return (
    <nav>
      <Link
        className="flex items-center justify-between bg-white px-4 pb-3 pt-4"
        to={to}
      >
        <Icon type="back" />
        <div className="flex-1 text-center">
          <Txt typography="h4">{title}</Txt>
        </div>
        <div className="h-8 w-8"></div>
      </Link>
      {br && <Br className="ml-6 w-[calc(100%-3rem)]" />}
    </nav>
  );
};
