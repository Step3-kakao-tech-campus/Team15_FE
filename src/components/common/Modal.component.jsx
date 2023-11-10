import classnames from "classnames";
import { isMobile } from "react-device-detect";
import { Button } from "./Button.component.jsx";
import { Icon } from "./Icon.component.jsx";
import ReactModal from "react-modal";

/**
 * @param {{
 *  children: React.ReactNode,
 *  isOpen: boolean,
 *  onRequestClose: () => void
 *  className: string,
 *  overLayCss: React.CSSProperties
 * }}
 */
export const CommonModal = ({
  children,
  isOpen,
  onRequestClose,
  className,
  overLayCss,
}) => {
  const overlay = {
    ...overLayCss,
  };

  const modalElement = document.getElementById("modal");

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{ overlay }}
      appElement={modalElement}
      className={className}
    >
      {children}
    </ReactModal>
  );
};

/**
 * @param {{
 *  children: React.ReactNode,
 *  isOpen: boolean,
 *  onRequestClose: () => void
 *  className: string,
 *  overLayCss: React.CSSProperties
 * }}
 */
const BaseModal = ({
  children,
  isOpen,
  onRequestClose,
  className,
  overLayCss,
}) => {
  const overlay = {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    backdropFilter: "blur(4px)",
    WebkitBackdropFilter: "blur(4px)",
    position: "absolute",
    inset: "0",
    width: isMobile ? "w-full" : "480px",
    zIndex: "100",
    ...overLayCss,
  };
  return (
    <CommonModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{ overlay }}
      className={classnames(
        "relative left-1/2 top-1/2 h-fit w-fit -translate-x-1/2 -translate-y-1/2 rounded-md border bg-[#F8F8F8] px-8 py-4 text-center",
        className
      )}
    >
      {children}
    </CommonModal>
  );
};

/**
 * @param {{
 *  children: React.ReactNode,
 *  isOpen: boolean,
 *  onClose: () => void,
 *  onRequestClose: () => void}}
 */
const AlertModal = ({ children, isOpen, onRequestClose, onClose }) => (
  <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
    <div className="my-2 text-center transition-all">{children}</div>
    <Button size="small" className="w-36 text-sm" onClick={onClose}>
      확인
    </Button>
  </Modal>
);

/**
 * @param {{
 *  children: React.ReactNode,
 *  isOpen: boolean,
 *  onClose: () => void,
 *  onRequestClose: () => void}}
 */
const ToDayModal = ({ children, isOpen, onRequestClose, onClose }) => {
  return (
    <Modal className="!p-0" isOpen={isOpen} onRequestClose={onRequestClose}>
      <div className="text-center transition-all">{children}</div>
      <div className="flex items-center justify-between">
        <button className="p-2" onClick={onClose}>
          오늘은 그만보기
        </button>
        <button className="p-2" onClick={onClose}>
          <Icon type="close" />
        </button>
      </div>
    </Modal>
  );
};

export const Modal = Object.assign(BaseModal, {
  Alert: AlertModal,
  ToDay: ToDayModal,
});
