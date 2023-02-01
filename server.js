const express = require("express");
const path = require("path");
var exphbs = require("express-handlebars");
const app = express();
const router = require("./routes/userroutes.js");
const { ExpressHandlebars } = require("express-handlebars");
const port = process.env.PORT || 8000;
const static_path = path.join(__dirname, "/assests");
const views_path = path.join(__dirname, "/assests/views");
var hbs = exphbs.create({ defaultLayout: "main" });
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", views_path);
app.use(express.static(static_path));

app.use("/", router);

app.listen(port, () => {
  console.log(`Server is listneing on port ${port}`);
});
