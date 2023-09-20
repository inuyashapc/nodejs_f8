const express = require("express");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const path = require("path");
const app = express();
const port = 3000;

const route = require("./routes");
const db = require("./config/db");

//Connect to db
db.connect();

//HTTP logger
// app.use(morgan("combined"));

//Template engine
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//body-parser no lam cho res.json(req.body); o CourseController hien thi object
// parse application/json
app.use(bodyParser.json());
//Routes init
route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
