import * as styles from "./App.module.scss";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "../Trial";
import ReactLogo from '../images/logo.svg'
import Button from 'react-bootstrap/Button';

const App = () => {
  const headerElement = (<div className={styles.ss}>Modal Title</div>);
  const headerText = "Modal Title";
  const headerImage = <img  className={styles.reactLogo} src={ReactLogo} alt="React Logo" />;
  const bodyText = "Modal Body";
  const footerText = "Modal Footer";
  const closeModal = () => {
    console.log('rk1 cm');
  };
  return (
    <div className={styles.App}>      
        Hello World
    </div>
  );
};

export default App;
