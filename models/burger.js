const orm = require("../config/orm")

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
          cb(res);
        });
    },

    insertOne: function(columns, value, cb) {
        orm.insertOne("burgers", columns, value, function(res) {
          cb(res);
        });
    },

    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
          cb(res);
        });
    }
};

module.exports = burger;