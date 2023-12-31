import { Component } from "react";
import { useNavigation } from "react-router-dom";
import { useAtom, useSetAtom } from "jotai";
import { ERROR_TYPE, errorCase } from "../../constants/errorCase.js";
import { onErrorModalAtom } from "../../stores/global.atom.js";
import { Modal } from "../../components/common/Modal.component.jsx";

/**
 * @param {React.Component} props.children
 * @returns {React.Component}
 */
export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return ErrorCatch(this.state.error);
    }

    return this.props.children;
  }
}

/**
 * @param {{message: string, onBeforeClose?: () => void}} props
 */
const CustomErrorAlert = ({ message, onBeforeClose }) => {
  const [onModal, setOnModal] = useAtom(onErrorModalAtom);

  const onClose = () => {
    setOnModal(false);
    onBeforeClose?.();
  };

  return (
    <Modal.Alert isOpen={onModal} onClose={onClose} onRequestClose={onClose}>
      {message}
    </Modal.Alert>
  );
};

/**
 * @param {import('axios').AxiosError} error
 */
export const ErrorCatch = (error) => {
  const navigation = useNavigation();
  const setOnModal = useSetAtom(onErrorModalAtom);

  const { reason } = error;
  const errorObject = errorCase[reason];

  switch (errorObject.type) {
    case ERROR_TYPE.ALERT_AND_REDIRECT:
      setOnModal(true);
      return (
        <CustomErrorAlert
          message={errorObject.message}
          onBeforeClose={() => navigation("/", { replace: true })}
        />
      );
    case ERROR_TYPE.ALERT:
    case ERROR_TYPE.NOTIFY:
      return <CustomErrorAlert message={errorObject.message} />;
    case ERROR_TYPE.NOT_LOGINED:
      return (
        <CustomErrorAlert
          message={errorObject.message}
          onBeforeClose={() => navigation("/login", { replace: true })}
        />
      );
    default:
      return (
        <CustomErrorAlert
          message="알 수가 없는 오류가 발생했습니다."
          onBeforeClose={(() => navigation("/"), { replace: true })}
        />
      );
  }
};
