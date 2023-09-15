const express = require('express');

const router = express.Router();

router.get("/", (req, res) => {
    let data = req.query;
    console.log(data.name);
    // res.sendStatus(201);
    res.send("Hello this is express!!....... " + req.query.age);
    // res.sendFile(__dirname + "/index.html");
});

router.post("/", (req, res) => {
    console.log(req.body);
    res.send("ACK");
});

module.exports = router;