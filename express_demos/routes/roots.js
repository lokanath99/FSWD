const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    // res.send('Hello !!')sending message
    // const que = req.query;
    // console.log(que); //capturing a get request query string
    // res.statusCode(200); //setting a status code to any possible code you want
    // res.sendFile(__dirname + "/index.html", (err) => {
    //     console.log(err);
    // });
    res.render("index.ejs", {user: "lokanath", age:90});
});

router.post("/", (req, res) => {
    var data = req.body; //capture request body
    data.age = 90; //alter the request body
    res.send(data); //send back the request body
});

module.exports = router;
