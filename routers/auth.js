const { Router } = require("express");
const { smartInsert } = require("../db-smart.js");
const { hash } = require("bcrypt");

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
    res.status(400).send("Bad request")
    return;
  }
  const id = await smartInsert("utente", {
    username,
    password: await hash(password)
  });
  res.status(201).json({ id });
})
router.post('/login', async (req, res) => {

})

module.exports = router