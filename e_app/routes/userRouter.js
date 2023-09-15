const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
    const Db = require("../conn");
    Db.conn;
    const userModel = require("../models/userSchema");
    console.log(await userModel.findOne({ age: 98 }));
    res.send(await userModel.find());
});

router.post("/", async (req, res) => {
    const Db = require("../conn");
    Db.conn;
    const userModel = require("../models/userSchema");
    let data = req.body;
    console.log(data);
    const fdbk = await userModel.create(data);
    res.send(fdbk);
});

router.delete("/", async (req, res) => {
    const Db = require("../conn");
    Db.conn;
    const userModel = require("../models/userSchema");
    let query = req.body;
    console.log(query);
    const fdbk = await userModel.remove(query);
    res.send(fdbk);
});

router.patch("/", async (req, res) => {
    const Db = require("../conn");
    Db.conn;
    const userModel = require("../models/userSchema");
    let query = req.body.query;
    let update = req.body.update;
    let fdbk = await userModel.updateOne(query, update);
    res.send(fdbk);
});

module.exports = router;
