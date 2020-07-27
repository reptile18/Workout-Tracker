const router = require("express").Router();
const path = require('path');

router.get("/", (req,res) => {
  res.sendFile(path.join(__dirname, "../public","blah.html"));
});

router.get("/exercise", (req,res) => {
  res.sendFile(path.join(__dirname,"../public",'exercise.html'));
});

module.exports = router;