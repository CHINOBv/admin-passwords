const { Router } = require("express");
const router = Router();
router.get("/", (req, res) => {
  res.send("de");
});

module.exports = { Routes: router };
