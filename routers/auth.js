const { Router } = require("express");
const { smartInsert, smartSelect } = require("../db-smart.js");
const { hash, compare } = require("bcrypt");
const { randomBytes } = require("crypto");
const router = Router()

router.post('/register', async (req, res) => {
  const { username, password } = req.body
  // const username = req.body.username
  // const password = req.body.password
  if (!username ||
    !password ||
    typeof username !== "string" ||
    typeof password !== "string" ||
    username.length < 4 ||
    password.length < 4
  ) {
    res.status(400).json({
      "message": "Invalid username or password"
    })
    return;
  }
  const hashed = await hash(password, 8);
  const id = await smartInsert("utente", {
    username,
    password: hashed
  });
  res.status(201).json({ id });
})
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const [user] = await smartSelect("utente", { username });
  const ok = await compare(password, user?.password);
  if (!user?.password || !ok) {
    res.status(401).json({
      "message": "Invalid username or password"
    });
    return;
  }

  const token = randomBytes(20).toString('hex');
  const exp = Date.now() + 1000 * 60 * 10;
  await smartInsert("token", {
    token,
    id_user: user.id,
    exp
  });
  res.json({
    accss_token: token,
    exp
  });
})

module.exports = router