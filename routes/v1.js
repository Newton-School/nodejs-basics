const express = require("express");
const productRoutes = require("./products");

const router = express.Router();

router.use("/products", productRoutes);

module.exports = router;
