const express = require("express");
const router = express.Router();

let tasks = [];
let currentId = 1;

const validateTask = (req, res, next) => {
  const { title, completed } = req.body;
  if (typeof title !== "string" || title.trim() === "") {
    return res.status(400).json({ error: "Title is required and must be an non empty string" });
  }
  if (completed !== undefined && typeof completed !== "boolean") {
    return res.status(400).json({ error: "Completed must be a booleam" });
  }
  next();
};

router.get("/", (req, res) => res.json(tasks));

router.post("/", validateTask, (req, res) => {
  const { title, completed = false } = req.body;
  const newTask = { id: currentId++, title, completed };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

router.put(":/id", validateTask, (req, res) => {
  const task = tasks.find((t) => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).json({ error: "Task not found" });

  const { title, completed } = req.body;
  task.title = title;

  if (completed != undefined) task.completed = completed;

  res.json(task);
});

router.delete(":/id", (req, res) => {
  const index = tasks.findIndex((t) => t.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: "Task not found" });

  const [deletedTask] = tasks.splice(index, 1);

  res.json(deletedTask);
});

module.exports = router;
