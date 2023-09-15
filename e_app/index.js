const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("app listining on 3000");
});

// const conn = require('./conn')

// const userModel = require('./models/userSchema')

// userModel.create({
//     name: "lokanath",
//     age: 98,
//     password: "Pa$$word"
// })

// async function finduser() {
//     var user = await userModel.findOne({ age: 98 });
//     console.log(user);
//     user.password = "pass";
//     user.save()
// }
// finduser();

// async function deluser() {
//     var deluser = await userModel.remove({ name: "lokanath" });
//     console.log(deluser);
// }
// deluser();

const rootRouter = require("./routes/rootRouter.js");
app.use("/", rootRouter);

const userRouter = require("./routes/userRouter.js");
app.use("/user", userRouter);
