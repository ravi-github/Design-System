// Arrow characters to use: ▼ ▶
const sleep = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};
const statuses = ["Todo", "In progress", "Done"];
const subtasks = [11, 12, 13, 14, 15, 16, 17, 18];
const mockIssue = {
  id: 1,
  title: "Design landing page",
  description: "Create a responsive landing page .",
  assignee: "Frantz Chris",
  status: "In progress",  
  subtasks: subtasks
};

export const sleepNew = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      
    }, time);
  });
};

export const getIssue =  async () => {
  await sleep(2000);
  return Promise.resolve(mockIssue);
};  

export const updateStatus = async (id, status) => {
  await sleep(1000);
  return;
};

const getSubtasks = async () => {
  await sleep(500);
  console.log
  return subtasks.map(id => ({
    id,
    title: `Subtask ${id}`,
    description: `Description for subtask ${id}`,
    assignee: `User ${id}`,
    status: statuses[id % 3]
  }));
};
