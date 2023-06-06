const jwt=require("jsonwebtoken")
const User = require("../Models/Userschema")
const Tokenusercreate=async(req,res)=>{
    const {Username,Email,Password}=req.body
    const usertoken=await User.create({
        Username,
        Email,
        Password
    })
    res.json({
        Id:usertoken._id,
        Username:usertoken.Ussename,
        Email:usertoken.Email,
        Password:usertoken.Password,
        Token:generateToken(usertoken._id)
    })


}
const generateToken=(id)=>{
    return jwt.sign({id},`${process.env.JWT_SECRET}`,{expiresIn:'1d'})
}
module.exports=Tokenusercreate