var express = require("express");
var router = express.Router();

router.get("/getcookies", (req, res) => {
  res.json(req.cookies);
});

router.post("/setcookie", (req, res) => {
  const user = req.body;
  res.cookie("user", JSON.stringify(user));
  res.json({ message: "User Cookie set successfully" });
});

module.exports = router;
