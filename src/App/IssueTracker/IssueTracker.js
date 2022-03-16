import { propTypes } from "react-bootstrap/esm/Image";
import * as styles from "./issueTracker.module.scss";

const IssueTracker = (props) => {

  return (
    <div className={styles.bodyContainer}>      
      {props.children}
    </div>
  );
};

// proptypes

export default IssueTracker;