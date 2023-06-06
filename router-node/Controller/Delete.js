const User = require("../Models/Userschema")

const Del=async(req,res)=>{
    const id=req.params.id
    const Userdelete=await User.findByIdAndRemove(id)
    res.json("Deleted")
    console.log("Deleted")

}

module.exports=Del