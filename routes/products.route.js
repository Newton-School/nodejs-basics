const express = require("express");
const path = require("path");

const router = express.Router();

const products = [
  {
    title: "Shoe",
    description: "Amazing shoe",
    price: "400",
  },
  {
    title: "Jean",
    description: "Amazing jean",
    price: "1400",
  },
  {
    title: "Cap",
    description: "Amazing cap",
    price: "500",
  },
];

router.get("/all-products", (__, res) => {
  res.render("products", { pageTitle: "Products", products });
});

module.exports = router;
