import * as styles from "./styles.module.scss";
import cx from 'classnames';

const ModalHeader = (props) => {
  const { headerCustomClass } = props;
  console.log('rk', props); 
  return (
    <div className={cx(headerCustomClass, styles.modalHeader)}>
      {props.children}
    </div>
  );
};

export default ModalHeader;