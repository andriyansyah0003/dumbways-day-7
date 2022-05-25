const express = require("express");

const app = express();
const PORT = 5000;

app.set("view engine", "hbs"); // set the view engine to handlebars

app.use("/public", express.static(__dirname + "/public")); // set the public folder as static

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/add-project", (req, res) => {
  res.render("add-project");
});
app.get("/detail-project", (req, res) => {
  res.render("project-detail");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
