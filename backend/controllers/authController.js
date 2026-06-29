const User = require("../models/User");
const bcrypt = require("bcryptjs");

exports.registerUser = async(req,res)=>{

    try{

        const {name,email,password} = req.body;

        const userExists = await User.findOne({email});

        if(userExists){
            return res.status(400).json({
                success:false,
                message:"User already exists"
            });
        }

        const hashedPassword =
        await bcrypt.hash(password,10);

        const user = await User.create({
            name,
            email,
            password:hashedPassword
        });

        res.status(201).json({
            success:true,
            message:"User Registered Successfully",
            user
        });

    }catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });
    }
};
const jwt = require("jsonwebtoken");

exports.loginUser = async(req,res)=>{

    try{

        const {email,password} = req.body;

        const user = await User.findOne({email});

        if(!user){
            return res.status(404).json({
                message:"User Not Found"
            });
        }

        const isMatch =
        await bcrypt.compare(
            password,
            user.password
        );

        if(!isMatch){
            return res.status(401).json({
                message:"Invalid Password"
            });
        }

        const token = jwt.sign(
            {
                userId:user._id
            },
            process.env.JWT_SECRET,
            {
                expiresIn:"1d"
            }
        );

        res.status(200).json({
            success:true,
            token,
            user
        });

    }catch(error){

        res.status(500).json({
            message:error.message
        });
    }
};
