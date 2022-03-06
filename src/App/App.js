import * as styles from "./App.module.scss";
import { Modal, Header } from "../Modal";
import ReactLogo from '../images/logo.svg'

const App = () => {
  const headerElement = (<div className={styles.ss}>Modal Title</div>);
  const headerText = "Modal Title";
  const headerImage = <img  width="50" height="50" src={ReactLogo} alt="React Logo" />;
  return (  
    <div className={styles.App}>   
        <Modal>
          <Header className={styles.ss}>{headerImage}</Header>
        </Modal>
    </div>
  );
};

export default App;
