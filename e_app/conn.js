const mongoose = require("mongoose");

async function conn() {
    module.exports = mongoose.connect(
        "mongodb://127.0.0.1:27017/testingDB",
        () => {
            console.log("Connected to Mongo");
        }
    );
}

module.exports.conn = conn();
