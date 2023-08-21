const db = require("../ultils/database");

module.exports.findAllUser = async (req, res) => {
  try {
    let data = await db.execute("SELECT * FROM users");
    let [row] = data;
    res.json({
      status: "success",
      users: row,
    });
  } catch (error) {
    res.json({
      messenge: "K thấy user",
    });
  }
};

module.exports.findOneUser = async (req, res) => {
  try {
    let { id } = req.params;
    let data = await db.execute("SELECT * FROM users WHERE users_id = ?", [id]);
    let rowProduct = data[0];
    console.log(rowProduct[0]);
    if (rowProduct === 0) {
      res.json({
        message: ` User với id = ${id} k tồn tại`,
      });
    } else {
      res.json(rowProduct[0]);
    }
  } catch (error) {
    res.json({
      message: "K thấy user",
    });
  }
};

module.exports.create = async (req, res) => {
  console.log(req.body);
  try {
    let { name, email, password } = req.body;
    // validate email, password
    let data = await db.execute(
      "INSERT INTO users (name, email, password ) VALUES(?, ?, ?, ?)",
      [name, email, password]
    );
    console.log(data);
    res.json({
      messenge: "Create user success",
    });
  } catch (error) {
    res.json({
      message: "Create user error",
    });
  }
};

module.exports.update = async (req, res) => {
  let { id } = req.params;
  let { name, email, password, phone } = req.body;
  try {
  let updateUser = await db.execute(`SELECT * FROM users WHERE users_id = ?`, [
    id,
  ]);
  let rowUser = updateUser[0];
  console.log(rowUser);
  if (rowUser === 0) {
    res.json({
      message: `Users với id = ${id} k tồn tại`,
    });
  } else {
    await db.execute(
      `UPDATE users SET name = ?, email = ?, password = ?,phone = ?  WHERE users_id = ?`,
      [
        name || rowUser[0].name,
        email || rowUser[0].email,
        password || rowUser[0].password,
        phone || rowUser[0].phone,
        id,
      ]
    );
  res.json({
    message: "Update user success",
  });
  }
  } catch (error) {
    res.json({
      messenge: "Update not success",
    });
  }
};


module.exports.remove = async (req, res) => {
  const { id } = req.params;
  try {
    await db.execute("DELETE FROM users WHERE users_id = ?", [id]);
    let data = await db.execute("SELECT * FROM users");
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
