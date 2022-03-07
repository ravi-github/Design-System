import * as styles from "./modalStyles.module.scss";
import cx from 'classnames';

const ModalHeader = (props) => {
  const { className } = props;
  console.log('rk', props); 
  return (
    <div className={cx(className, styles.modalHeader)}>
      {props.children}
    </div>
  );
};

export default ModalHeader;