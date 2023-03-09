const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/mongotest", () => {
    console.log("connected");
});

const userSchema = mongoose.Schema({
    name: String,
    age: Number,
    pass: String,
});

const userModel = mongoose.model('users', userSchema);

// userModel.create({
//     name:'talkalot',
//     age:90,
//     pass:'talkalot99'
// })

async function findUser(){

    var user = await userModel.findOne({age:90})
    console.log(user);
    user.age = 85;
    user.save()
}

async function delUser(){
    var delUser = await userModel.remove({age:85})
    console.log(delUser);
}

// delUser()

// findUser()

