import * as styles from "./styles.module.scss";

const Header = (props) => {
  const { className } = props;
  console.log('rk', className);
  return (
    <div className={styles.modalHeader}>
      {props.children}
    </div>
  );
};

export default Header;