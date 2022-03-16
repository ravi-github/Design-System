import * as styles from "./issueTracker.module.scss";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const ISSUE_STATUS = {
  TODO: "Todo",
  IN_PROGRESS: "In Progress",
  DONE: "Done",
};

const IssueTrackerHeader = ({issue}) => {    
  if(!issue) return null;
  const { title, status } = issue;
  const options = [
    ISSUE_STATUS.TODO, ISSUE_STATUS.IN_PROGRESS, ISSUE_STATUS.DONE
  ];
  const onChange = () => {
    console.log('T On Select !');
  };
  return (
    <div className={styles.headerContainer}>      
      <div>{title}</div>
      <Dropdown options={options} onChange={onChange} value={status} placeholder="Select an option" />
    </div>
  );
};
export default IssueTrackerHeader;