const db = require("../ultils/database");

module.exports.findAllCart = async (req, res) => {
  // try {
    let dataCart = await db.execute("SELECT * FROM cart_product");
    let [row] = dataCart[0];
    console.log(row);
  //   res.json({
  //     status: "success",
  //     carts: row,
  //   });
  // } catch (error) {
  //   res.json({
  //     messenge: "K thấy cart",
  //   });
  // }
};

module.exports.findOneCart = async (req, res) => {
  try {
    let { id } = req.params;
    let dataCart = await db.execute(
      "SELECT * FROM cart_product WHERE cart_id = ?",
      [id]
    );
    let rowCart = dataCart[0];
    console.log(rowCart[0]);
    if (rowCart === 0) {
      res.json({
        message: ` Cart với id = ${id} k tồn tại`,
      });
    } else {
      res.json(rowCart[0]);
    }
  } catch (error) {
    res.json({
      message: "K thấy Cart",
    });
  }
};

module.exports.createCart = async (req, res) => {
  // console.log(req.body);
  // try {
    let { user_id } = req.body;
    // console.log(user_id);
    // validate email, password
    let dataCart = await db.execute(
      "INSERT INTO cart_product (user_id) VALUES(?, ?, ?)",
      [user_id]
    );
    console.log(dataCart);
  //   res.json({
  //     messenge: "Create Cart success",
  //   });
  // } catch (error) {
  //   res.json({
  //     message: "Create Cart error",
  //     error,
  //   });
  // }
};

module.exports.updateCart = async (req, res) => {
  let { id } = req.params;
  let { user_id, product_id, quantity } = req.body;
  try {
    let updateCart = await db.execute(
      `SELECT * FROM cart_product WHERE cart_id = ?`,
      [id]
    );
    let rowCart = updateCart[0];
    console.log(rowCart);
    if (rowCart === 0) {
      res.json({
        message: `carts với id = ${id} k tồn tại`,
      });
    } else {
      await db.execute(
        `UPDATE carts SET cart_id = ?, product_id = ?, quantity = ? WHERE cart_id = ?`,
        [
          user_id || rowCart[0].user_id,
          product_id || rowCart[0].product_id,
          quantity || rowCart[0].quantity,
          id,
        ]
      );
      res.json({
        message: "Update carts success",
      });
    }
  } catch (error) {
    res.json({
      messenge: "Update not success",
    });
  }
};


module.exports.removeCart = async (req, res) => {
  const { id } = req.params;
  try {
    await db.execute("DELETE FROM carts WHERE cart_id = ?", [id]);
    let dataCart = await db.execute("SELECT * FROM carts");
    console.log(dataCart);
    res.json({
      message: "Đã delete thành công",
      carts: dataCart[0],
    });
  } catch (error) {
    res.json({
      message: "Delete not success",
    });
  }
};