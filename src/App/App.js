import { useState, useEffect } from "react";
import * as styles from "./App.module.scss";
import { IssueTracker, IssueTrackerHeader } from "./IssueTracker";
import { getIssue } from "./IssueTracker/task.js";

const App = () => {

  const [isLoading, setLoading] = useState(true);
  const [issue, setIssue] = useState(null);

  useEffect( async () => {  
    const issue = await getIssue();
    console.log('T issue!', issue);
    setIssue(issue);
    setLoading(false);
  });

  return (
    <div className={styles.App}>
    {
      isLoading 
        ? <div>LOADING</div> 
        : 
          (<IssueTracker issue={issue}  >

            <IssueTrackerHeader issue={issue}>
            </IssueTrackerHeader>

            {/* <IssueTrackerBody>
            </IssueTrackerBody>

            <IssueTrackerFooter>
            </IssueTrackerFooter> */}
          
          </IssueTracker>)
    }
    </div>
  );
};

export default App;
