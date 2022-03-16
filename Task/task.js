// Arrow characters to use: ▼ ▶

const statuses = ["Todo", "In progress", "Done"];
const subtasks = [11, 12, 13, 14, 15, 16, 17, 18];
const sleep = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

// Available APIs
const getIssue = async () =>
  Promise.resolve({
    id: 1,
    title: "Atlassian Issue",
    description: "Issue Description",
    assignee: "Nelli Bielfeld",
    status: "In progress",
    subtasks: subtasks
  });

const updateStatus = async (id, status) => {
  await sleep(1000);
  return;
};

const getSubtasks = async () => {
  await sleep(500);
  return subtasks.map(id => ({
    id,
    title: `Subtask ${id}`,
    description: `Description for subtask ${id}`,
    assignee: `User ${id}`,
    status: statuses[id % 3]
  }));
};
