const express = require("express");
const taskRoutes = require("./routes/task");

const app = express();

app.use(express.json());

app.use("/task", taskRoutes);

module.exports = app;
