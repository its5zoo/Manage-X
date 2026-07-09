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

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("MongoDB Connected"));
app.use('/',webRoutes);
app.use('/book',bookRoutes);
app.use("/api/auth",authRoutes);

app.listen(process.env.PORT,()=>{
    console.log("Server Running");
});
