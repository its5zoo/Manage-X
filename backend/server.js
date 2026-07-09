require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const webRoutes = require('./routes/web');
const bookRoutes = require('./routes/web1');
const authRoutes =require("./routes/authRoutes");

const app = express();

app.use(cors());

app.use(express.json());

// Serve React static build files
app.use(express.static(path.join(__dirname, "../frontend/dist")));

// SPA Routing Fallback: Serve index.html for browser navigation requests
app.use((req, res, next) => {
    if (req.method === 'GET' && req.accepts('html')) {
        return res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
    }
    next();
});

const mongoUrl = process.env.MONGO_URL || process.env.MONGODB_URI || process.env.MONGO_URI || process.env.DATABASE_URL;

if (!mongoUrl) {
    console.error("========================================================================");
    console.error("ERROR: MongoDB connection URL is undefined!");
    console.error("Please add the 'MONGO_URL' or 'MONGODB_URI' environment variable in your");
    console.error("Railway dashboard settings under the Variables tab.");
    console.error("========================================================================");
    process.exit(1);
}

mongoose.connect(mongoUrl)
.then(()=>console.log("MongoDB Connected"))
.catch((err) => {
    console.error("MongoDB Connection Failed:", err);
});
app.use('/',webRoutes);
app.use('/book',bookRoutes);
app.use("/api/auth",authRoutes);

app.listen(process.env.PORT,()=>{
    console.log("Server Running");
});
