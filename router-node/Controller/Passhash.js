const bcrypt=require("bcrypt")
const User = require("../Models/Userschema")

const Hashpass=async(req,res)=>{
    const {Username,Password,Email}=req.body
    const salt=await bcrypt.genSalt(10)
    const hashing=await bcrypt.hash(Password,salt)
    // res.json(hashing)

    const Usercreate=await User.create({
        Username,
        Password:hashing,
        Email
    })
    res.json(Usercreate)
    console.log(Usercreate)

}
module.exports=Hashpass