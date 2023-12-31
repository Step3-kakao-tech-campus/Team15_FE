import { BASE_PADDING } from "../../constants";
import { Icon } from "../common/Icon.component";
import { Link } from "../common/Link.component";
import { Txt } from "../common/Txt.component";
import classnames from "classnames";

const menus = [
  {
    title: "페이머니",
    path: "/paymoney",
  },
  {
    title: "보로미 소개",
    path: "#",
  },
  {
    title: "문의 및 제안",
    path: "#",
  },
  {
    title: "로그아웃",
    path: "/signout",
  },
];

export const MyPageMenu = () => {
  return (
    <>
      {menus.map((menu) => (
        <ul key={menu.title}>
          <Link
            to={menu.path}
            className={classnames(
              "flex w-full items-center justify-between border-y-[.5px] bg-white py-3",
              BASE_PADDING
            )}
          >
            <Txt>{menu.title}</Txt>
            <Icon size="small" type="back" className="rotate-180" />
          </Link>
        </ul>
      ))}
    </>
  );
};
