import Users from "../models/userModel.js";
import argon2 from "argon2";
import crypto from "crypto";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.DATABASE_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

/* ---addUser using MySQL---
const Users = require('../models/userModel.js');

export const addUser = async (req, res) =>{
    const {email, nama, password, conf_password} = req.body;
    if(password != conf_password){
        return res.status(406).json({message: "Password dan Password konfirmasi tidak sama"})
    }
    const user = await Users.findOne({
        where: {
            email: email
        }
    });
    if(user){
        return res.status(409).json({error: "true", message: "Email sudah terdaftar"})
    }
    const hashedPassword = await argon2.hash(password);
    try{
        await Users.create({
            email: email,
            nama: nama,
            password: hashedPassword
        });
        res.status(201).json({message: "Registration Complete", data:{email: email, nama: nama}});
    } catch(error) {
        console.log(error.message);
        res.status(400).json({message: "Failed to Register the account", error: error.message});
    }
};
*/

export const addUser = async (req, res) =>{
    const {email, nama, password, conf_password} = req.body;
    if(password != conf_password){
        return res.status(406).json({message: "Password dan Password konfirmasi tidak sama"})
    }
    const user = await Users.findOne({ email: email });
    if(user){
        return res.status(409).json({error: "true", message: "Email sudah terdaftar"})
    }
    const uuid = crypto.randomUUID();
    const hashedPassword = await argon2.hash(password);
    try{
        const newUser = new Users({uuid: uuid, email: email, name: nama, password: hashedPassword});
        await newUser.save();
        res.status(201).json({message: "Registration Complete", data:{uuid: uuid, email: email, nama: nama}});
    } catch(error) {
        console.log(error.message);
        res.status(400).json({message: "Failed to Register the account", error: error.message});
    }
};

