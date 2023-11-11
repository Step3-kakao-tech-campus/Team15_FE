import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { isIOS, isMobile } from "react-device-detect";
import { RouterProvider } from "react-router-dom";
import { router } from "../router/index.jsx";
import { MOBILE_WIDTH } from "./constants/index.js";
import { ErrorBoundary } from "./components/common/Errorboundary.component.jsx";
import classnames from "classnames";

const queryClient = new QueryClient();

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        {isIOS && <div className="notch-ios"></div>}
        {!isMobile && (
          <div className="absolute -z-50 h-screen w-screen bg-[#62AB0540]"></div>
        )}
        <div
          className={classnames(
            !isMobile && "flex w-screen items-center justify-center"
          )}
        >
          <div
            className={classnames(
              "relative",
              !isMobile ? MOBILE_WIDTH : "w-full"
            )}
          >
            <RouterProvider router={router} />
          </div>
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
