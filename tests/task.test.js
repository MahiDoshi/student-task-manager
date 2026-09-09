const test = require("node:test");
const assert = require("node:assert/strict");

function addTask(tasks, title, priority = "Medium") {
  return [...tasks, { title, priority, completed: false }];
}

test("adds a task with default completion state", () => {
  const tasks = addTask([], "Study GitHub");

  assert.equal(tasks.length, 1);
  assert.equal(tasks[0].title, "Study GitHub");
  assert.equal(tasks[0].completed, false);
});

test("stores selected priority", () => {
  const tasks = addTask([], "Submit assignment", "High");

  assert.equal(tasks[0].priority, "High");
});

test("completed count is calculated correctly", () => {
  const tasks = [
    { title: "A", completed: true },
    { title: "B", completed: false },
    { title: "C", completed: true }
  ];
  assert.equal(tasks.filter(t => t.completed).length, 2);

  assert.equal(
    tasks.filter(task => task.completed).length,
    2
  );
});
