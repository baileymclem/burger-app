var express = require("express");
var router = express.Router();
var burgers = require("../models/burger");

router.get("/", function (req, res) {
  burgers.selectAll(function (data) {
    var burgerObject = {
      burgers: data,
    };
    res.render("index", burgerObject);
  });
});

router.post("/api/burgers", function (req, res) {
  burgers.insertOne(
    ["burger_name", "devoured"],
    [req.body.name, req.body.devoured],
    function (result) {
      res.json({ id: result.insertId });
    }
  );
});

router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  burger.updateOne(
    {
      devoured: req.body.devoured,
    },
    condition,
    function (result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

// router.delete("/api/burgers/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   burger.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

module.exports = router;