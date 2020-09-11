const helper = {};


helper.categorizedTask = tasks => {
  const arrayToReturn = [];
  let category = helper.categorizedCompeleted_(tasks);
  arrayToReturn.push(category);
  category = helper.categorizedInCompeleted_(tasks);
  arrayToReturn.push(category);
};
helper.categorizedCompeleted_ = tasks => {
  const array = tasks.filter(task => task.Report !== "");

  return {
    title: "Completed tasks",
    amount: array.length,
  };
};
helper.categorizedInCompeleted_ = tasks => {
  const array = tasks.filter(task => task.Report == "");
  return {
    title: "Incompleted tasks",
    amount: array.length,
  };
};
export default helper;
