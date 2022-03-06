import * as styles from "./styles.module.scss";

const Modal = (props) => {
  return (
    <div className={styles.modal}>
      {props.children}
    </div>
  );
};

export default Modal;