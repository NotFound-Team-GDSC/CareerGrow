// import Users from '../models/userModel.js';
import argon2 from "argon2";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import Users from "../models/userModel.js";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.DATABASE_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const token = jwt.sign({
    data: 'foobar'
  }, 'secret');

// userLogin using MySQL
// export const userLogin = async (req, res) => {
//     console.log(token);
//     const user = await Users.findOne({
//         where:{
//             email: req.body.email
//         }
//     });
//     if(!user) return res.status(404).json({error:"true", message: "Email/Password Salah"});
//     const match = await argon2.verify(user.password, req.body.password);
//     if(!match){
//         return res.status(404).json({error:"true", message: "Email/Password Salah"});
//     }
//     const nama = user.nama;
//     const email = user.email;
//     res.status(200).json({error:"false",message: "Login Success", data:{email: email, nama: nama, token: token}});
// }

export const userLogin = async (req, res) => {
    const userEmail = req.body.email
    console.log(token);
    const user = await Users.findOne({ email: userEmail });
    if(!user) return res.status(404).json({error:"true", message: "Email/Password Salah"});
    const match = await argon2.verify(user.password, req.body.password);
    if(!match){
        return res.status(404).json({error:"true", message: "Email/Password Salah1"});
    }
    const nama = user.nama;
    const email = user.email;
    res.status(200).json({error:"false",message: "Login Success", data:{email: email, nama: nama, token: token}});
}