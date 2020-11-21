const express = require("express");
const path = require("path");
const app = express();
const morgan = require("morgan");
const multer = require("multer");

//Initializations

app.set("port", process.env.PORT || 4000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
// Mindlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(
  multer({ dest: path.join(__dirname, "public/img/uploads") }).single("image")
);
//Routes
app.use(require("./routes/index"));
//Sstatic files

// Start server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")} `);
});
