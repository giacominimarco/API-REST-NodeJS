require("dotenv-flow").config();
const express = require("express");
const app = express();

const { fetch, create, update, deleteUser } = require("./handlers/user");

app.get("/", function (req, res, next) {
  res.status(200).send("Olá ORANGO.dev!");
});

app.get("/users", fetch);
app.post("/users", create);
app.put("/users/:id", update);
app.delete("/users/:id", deleteUser);

app.listen(3000);