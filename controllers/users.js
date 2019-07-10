const User = require("../models/user");
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET;

module.exports = {
  login,
  signup
};

async function login(req, res) {
  console.log(req.body);
  try {
    const user = await User.findOne({ username: req.body.username });
    console.log('user: ', user);
    if (!user) return res.status(401).json({ err: "bad credentials" });
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(user);
        res.json({ token });
      } else {
        return res.status(401).json({ err: "bad credentials" });
      }
    });
  } catch (err) {
    return res.status(401).json(err);
  }
}

async function signup(req, res) {
  console.log(req.body);
  const user = new User(req.body);
  try {
    await user.save();
    const token = createJWT(user);
    console.log(token);
    res.json({ token });
  } catch (err) {
    // Probably a duplicate email
    res.status(400).json(err);
  }
}

/* helper functions */

function createJWT(user) {
  console.log(SECRET_KEY, typeof SECRET_KEY);
  return jwt.sign(
    { user }, // data payload
    SECRET_KEY,
    { expiresIn: "24h" }
  );
}
