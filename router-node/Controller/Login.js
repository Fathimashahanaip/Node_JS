const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
const User = require("../Models/Userschema")


const Login=async(req,res)=>{
    const {Email,Password}=req.body
    const emailch=await User.findOne({Email})
if(emailch){
    if(emailch.Email===Email && emailch.Password===Password)
    {
        res.json("loggin successfully")
        console.log("logged")
    }
    else{
        res.json("incorrect pass or Email")
        console.log("not logged")
    }
}
else
{
    res.json("cann't get any data")
    console.log("cann't get any data")
}
}
module.exports=Login