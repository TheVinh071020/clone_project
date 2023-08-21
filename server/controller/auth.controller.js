const authService = require("../services/auth.service");

module.exports.signup = async (req, res) => {
  let { name, email, password } = req.body;
  // try {
    await authService.signup(name, email, password);
    res.json({
      status: 200,
      message: " Sign  up successfully",
    });
  // } catch (error) {
  //   res.json({ message: error.message });
  // }
};

module.exports.signin = async (req, res) => {
  let { email, password } = req.body;
  try {
    let result = await authService.signin(email, password);
    res.json({
      result,
      messenge: "Sign in success",
    });
  } catch (error) {
    res.json({
      error,
    });
  }
};
