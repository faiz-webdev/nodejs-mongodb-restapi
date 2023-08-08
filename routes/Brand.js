const express = require("express");
const { createBrand } = require("../controller/BrandController");

const router = express.Router();

router.get("/", createBrand);

exports.router = router;