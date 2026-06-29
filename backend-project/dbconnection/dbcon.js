const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("MongoDB Connection Successful");
    })
    .catch((error) => {
        console.log("MongoDB Connection Failed");
        console.log(error.message);
    });