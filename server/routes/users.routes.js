const express = require("express");
const router = express.Router();

const {
  findAllUser,
  findOneUser,
  create,
  update,
  remove,
} = require("../controller/users.controller");

const { isAuth } = require("../middlewares/auth.middlewares");

// GET All users
router.get("/", findAllUser);

// GET ONE user
router.get("/:id", findOneUser);

router.post("/",isAuth, create);

router.patch("/:id", update);

router.delete("/:id",  remove);

module.exports = router;
