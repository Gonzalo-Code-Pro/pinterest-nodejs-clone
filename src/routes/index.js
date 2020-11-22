const { Router } = require("express");

const router = Router();
const imageModel = require("../models/image"); //recibimos el mnuevo modelo
router.get("/", (req, res) => {
  res.send("Index page router");
});

router.get("/upload", (req, res) => {
  res.render("upload.ejs");
});

router.post("/upload", (req, res) => {
  const newImage = new imageModel(); //utilizando una instancia del modelo
  newImage.title = req.body.title; //guardamos em titulo
  newImage.description = req.body.description;
  newImage.filename = req.file.filename;
  newImage.path = "/img/uploads" + req.file.filename;
  newImage.originalname = req.file.originalname;
  newImage.mimetype = req.file.mimetype;
  newImage.size = req.file.size;

  res.send(newImage);
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
