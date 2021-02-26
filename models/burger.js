var orm = require("../config/orm.js");

var burgers = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },

  insertOne: function (cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function (res) {
      cb(res);
    });
  },
  updateOne: function (id, cb) {
    var condition = "id =" + id;
    orm.updateOne("burgers", {devoured: true}, condition, function (res) {
      cb(res);
    });
  },
  //   delete: function(condition, cb) {
  //     orm.delete("burgers", condition, function(res) {
  //       cb(res);
  //     });
  //   }
};

module.exports = burgers;
