const express = require("express");
const productRoutes = require("./products.route");
const postRoutes = require("./posts.route");

const router = express.Router();

router.use("/products", productRoutes);
router.use("/posts", postRoutes);

module.exports = router;
