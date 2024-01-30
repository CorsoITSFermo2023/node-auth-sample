const { Router } = require("express");

const router = Router()

router.get('/', async (req, res) => {
  if (!req.session?.counter) {
    req.session.counter = 0;
    req.session.save();
    res.json({
      "message": "Welcome to the session demo"
    })
    return;
  }
  res.json({
    "message": "Bentornato per la vistia numero: " + ++req.session.counter
  })
})

module.exports = router