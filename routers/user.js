const { Router } = require("express");
const { smartSelect } = require("../db-smart");

const router = Router()

router.get('/whoami', async (req, res) => {
  const token = req.headers.authorization?.replace("Bearer ", "");
  const [user] = await smartSelect("utente", {
    id: req.session.id_user
  });
  res.json(user)
})

module.exports = router