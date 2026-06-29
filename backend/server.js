require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const webRoutes = require('./routes/web');
const bookRoutes = require('./routes/web1');
const authRoutes =require("./routes/authRoutes");

const app = express();

app.use(cors());

app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("MongoDB Connected"));
app.use('/',webRoutes);
app.use('/book',bookRoutes);
app.use("/api/auth",authRoutes);

app.listen(process.env.PORT,()=>{
    console.log("Server Running");
});
