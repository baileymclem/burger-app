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
    orm.updateOne("burgers", "devoured", true, id,function (res) {
      cb(res);
    });
  },
};

module.exports = burgers;
