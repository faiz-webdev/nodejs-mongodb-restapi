const express = require("express");
const { createBrand, getBrand } = require("../controller/BrandController");

const router = express.Router();

router.get("/", getBrand).post("/", createBrand);

exports.router = router;
