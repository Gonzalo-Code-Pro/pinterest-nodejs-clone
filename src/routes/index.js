const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.send("Index page router");
});

router.get("/upload", (req, res) => {
  res.render("upload.ejs");
});

router.post("/upload", (req, res) => {
  console.log(req.file);
  res.send("Tu iamgen se subio !!!");
});

router.get("/image/:id", (req, res) => {
  res.send("Iamge single");
});

router.get("/image/:id/delete", (req, res) => {
  res.send("Image deleted");
});
//este es un cambio

//este es un segundocambio xd
module.exports = router;
