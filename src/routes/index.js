const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.send("Index page router");
});

router.get("/upload", (req, res) => {
  res.render("upload.ejs");
});

router.post("/upload", (req, res) => {
  res.send("uploaded !!");
});

router.get("/image/:id", (req, res) => {
  res.send("Iamge single");
});

router.get("/image/:id/delete", (req, res) => {
  res.send("Image deleted");
});

module.exports = router;
