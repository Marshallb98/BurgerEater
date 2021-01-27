const express = require("express")
const burger = require("../models/burger")

const router = express.Router();

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var handleBars = {
            burgers: data
        };
        console.log(handleBars);
        res.render("index", handleBars);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne(
        [
            "burger_name", "devoured"
        ],
        [
            req.body.burger_name, req.body.devoured
        ],
        function (result) {
            res.json({ id: result.insertId });
        });
});

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne(
        {
            devoured: req.body.devoured
        },
        condition,
        function (result) {
            if (result.changedRows == 0) {
                return res.status(404).end();
            }
            else {
                res.status(200).end();
            }
        });
});

module.exports = router;