const express = require("express");
const router = express.Router();

// Require các Controller cần thiết
const {
  findAllProduct,
  findOneProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/products.controller");
const { isAuth } = require("../middlewares/auth.middlewares");
// GET All product
router.get("/", findAllProduct);

// Get on product
router.get("/:id", findOneProduct);

// Create product
router.post("/", createProduct);

// Update product
router.patch("/:id", updateProduct);

//Delete product
router.delete("/:id", deleteProduct);

module.exports = router;
