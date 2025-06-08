const jwt = require("jsonwebtoken");

const generateToken = ({ id, username, email, role }) => {
  const secret = process.env.JWT_SECRET;
  const payload = {
    _id: id,
    username: username,
    email,
    role: role,
  };
  const Token = jwt.sign(payload, secret, {
    expiresIn: "1h",
  });

  //return token
  return Token;
};

module.exports = { generateToken };
