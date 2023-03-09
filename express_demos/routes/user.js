const express = require('express');
const router = express.Router(); 


router.get("/", (req, res) => {
    const users = {
        name: "lokanath",
        age: 90,
    };
    res.send(users);
});

module.exports = router;