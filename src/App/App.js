import * as styles from "./App.module.scss";
import { Modal, ModalHeader } from "../Modal";
import ReactLogo from '../images/logo.svg'

const App = () => {
  const headerElement = (<div className={styles.ss}>Modal Title</div>);
  const headerText = "Modal Title";
  const headerImage = <img  className={styles.t} width="50" height="50" src={ReactLogo} alt="React Logo" />;
  return (  
    <div className={styles.App}>   
        <Modal>
          <Modal.Header headerCustomClass={styles.headerCustomClass}>{headerImage}</Modal.Header>
        </Modal>
    </div>
  );
};

export default App;
