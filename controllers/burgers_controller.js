var express = require("express");
var router = express.Router();
var burgers = require("../models/burger.js");

router.get("/", function (req, res) {
  burgers.selectAll(function (data) {
    var burgerObject = {
      burgers: data,
    };
    res.render("index", burgerObject);
  });
});

router.post("/api/burger", function (req, res) {
  burgers.insertOne(
    ["burger_name", "devoured"],
    [req.body.name, req.body.devoured],
    function (result) {
      res.json({ id: result.insertId });
    }
  );
});

router.put("/api/devoured", function (req, res) {
  var id = req.body.id;

  burgers.updateOne(id, function(result) {
    res.json({ id: result.id });
  });
});

module.exports = router;