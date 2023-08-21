const express = require("express");
const router = express.Router();

const { isAuth } = require("../middlewares/auth.middlewares");

const {
  findAllCart,
  findOneCart,
  createCart,
  updateCart,
  removeCart,
} = require("../controller/cart.controller");

router.get("/" , findAllCart)

router.get("/:id", findOneCart);

router.post("/", createCart);

router.patch("/:id", updateCart);

router.delete("/:id", removeCart);



module.exports = router;
