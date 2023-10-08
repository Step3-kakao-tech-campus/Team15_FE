import { useParams } from "react-router-dom";
import { ProductDetail } from "../components/product/Detail.component";
import { BASE_PADDING } from "../constants";
import { isIOS, isMobile } from "react-device-detect";
import classnames from "classnames";
import { AppBar } from "../components/common/AppBar.component";
import { BottomFullLink } from "../components/common/BottomFullLink.component";
import { MyMoney } from "../components/paymoney/MyMoney";
import { MoneyHistory } from "../components/paymoney/MoneyHistory";

export const PayMoneyPage = () => {
    const { piece } = useParams();

    return (
        <>
            <AppBar to="/mypage" title={"페이머니"} br={true} />
            <main
                aria-label="main"
                className={classnames(
                    "bg-white overflow-auto",
                    BASE_PADDING,
                    isMobile && isIOS
                        ? "h-[calc(100vh-10rem-env(safe-area-inset-top))]"
                        : "h-[calc(100vh-8.5rem)]"
                )}
            >
                <MyMoney piece={piece} />
                <MoneyHistory />
            </main>
        </>
    );
};
