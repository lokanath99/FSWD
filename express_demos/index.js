const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.set("view-engine", "ejs");

app.use(express.json()); //used for handling post body data
app.use(express.urlencoded({ extended: true })); //used if pages contains form datas

app.listen(3000, (err) => {
    //starting server at port 3000
    if (err) console.log(err); //handling if there are any errors
    else console.log("app listening on 3000");
});




mongoose.connect("mongodb://127.0.0.1:27017/mongotest", () => {
    console.log("connected");
});

const userModel = require("./models/userSchema");


// const userSchema = mongoose.Schema({
//     name: String,
//     age: Number,
//     pass: String,
// });

// const userModel = mongoose.model('users', userSchema);

// userModel.create({
//     name:'talkalot',
//     age:90,
//     pass:'talkalot99'
// })

async function findUser(){

    var user = await userModel.findOne({age:85})
    console.log(user);
    // user.age = 85;
    // user.save()
}

async function delUser(){
    var delUser = await userModel.remove({age:85})
    console.log(delUser);
}

delUser()

// findUser()



// app.get("/", (req, res) => {
//     // res.send('Hello !!')sending message
//     // const que = req.query;
//     // console.log(que); //capturing a get request query string
//     // res.statusCode(200); //setting a status code to any possible code you want
//     res.sendFile(__dirname + "/index.html", (err) => {
//         console.log(err);
//     });
// });

// app.post("/", (req, res) => {
//     var data = req.body; //capture request body
//     data.age = 90; //alter the request body
//     res.send(data); //send back the request body
// });

const rootRouter = require("./routes/roots");
app.use("/", rootRouter);

const userRouter = require("./routes/user");
app.use("/user", userRouter);
