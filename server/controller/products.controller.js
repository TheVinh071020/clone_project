const db = require("../ultils/database");

module.exports.findAllProduct = async (req, res) => {
  console.log("vao==========>");
  try {
    let data = await db.execute("SELECT * FROM products");
    let [row] = data;
    console.log(row);
    res.json({
      status: "success",
      products: row,
    });
  } catch (error) {
    res.json({
      messenge: "K thấy product",
    });
  }
};

module.exports.findOneProduct = async (req, res) => {
  try {
    let { id } = req.params;
    let data = await db.execute("SELECT * FROM products WHERE product_id = ?", [
      id,
    ]);
    let rowProduct = data[0];
    console.log(rowProduct[0]);
    if (rowProduct === 0) {
      res.json({
        message: ` Product với id = ${id} k tồn tại`,
      });
    } else {
      res.json(rowProduct[0]);
    }
  } catch (error) {
    res.json({
      message: "K thấy Product",
    });
  }
};

module.exports.createProduct = async (req, res) => {
  try {
    let { name, title, price, img } = req.body;
    // validate email, password
    let data = await db.execute(
      "INSERT INTO products(name, title, price, img) VALUES(?, ?, ?, ?)",
      [name, title, price, img]
    );
    console.log(data);
    res.json({
      messenge: "Create product success",
    });
  } catch (error) {
    res.json({
      message: "Create product error",
    });
  }
};

module.exports.updateProduct = async (req, res) => {
  let { id } = req.params;
  let { name, title, price, img } = req.body;
  try {
    let updateProduct = await db.execute(
      `SELECT * FROM products WHERE product_id = ?`,
      [id]
    );
    let rowProduct = updateProduct[0];
    console.log(rowProduct);
    if (rowProduct === 0) {
      res.json({
        message: `Product với id = ${id} k tồn tại`,
      });
    } else {
      await db.execute(
        `UPDATE products SET name = ?, title = ?, price = ?,img = ?  WHERE product_id = ?`,
        [
          name || rowProduct[0].name,
          title || rowProduct[0].title,
          price || rowProduct[0].price,
          img || rowProduct[0].img,
          id,
        ]
      );
      res.json({
        message: "Update product success",
      });
    }
  } catch (error) {
    res.json({
      messenge: "Update not success",
    });
  }
};

module.exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await db.execute("DELETE FROM products WHERE product_id = ?", [id]);
    let data = await db.execute("SELECT * FROM products");
    console.log(data);
    res.json({
      message: "Đã delete thành công",
      products: data[0],
    });
  } catch (error) {
    res.json({
      message: "Delete not success",
    });
  }
};
