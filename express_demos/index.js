const express = require("express");
const app = express();

app.use(express.json());//used for handling post body data
app.use(express.urlencoded({ extended: true }));//used if pages contains form datas

app.listen(3000, (err) => {//starting server at port 3000
    if (err) console.log(err.message);//handling if there are any errors
    else console.log("app listening on 3000");
});

app.get("/", (req, res) => {
    // res.send('Hello !!')sending message
    // const que = req.query;
    // console.log(que); //capturing a get request query string
    // res.statusCode(200); //setting a status code to any possible code you want
    res.sendFile(__dirname + "/index.html", (err) => {
        console.log(err.message);
    });
});

app.post("/", (req, res) => {
    var data = req.body;//capture request body
    data.age = 90;//alter the request body 
    res.send(data);//send back the request body
});
