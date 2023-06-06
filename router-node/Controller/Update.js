const User = require("../Models/Userschema")

const Updateuser=async(req,res)=>{
    const id =req.params.id
    // const uid='6475820d1c7d4b8b2d7ed850'
    const {Username,Email,Password}=req.body
    const Pass=Password.length
    const Emailch=await User.findOne({Email})
    if(!Username || !Email || !Password){
        console.log("all details are compulsory")
        res.json("all details are compulsory")

    }
    else if(!Emailch){
    if( Pass>8){
        
    const Userupdate=await User.findByIdAndUpdate(id,{Username,Email,Password})
    // const Userupdate=await User.findByIdAndUpdate(uid,{Username,Email,Password})
    res.json({
        Username:Userupdate.Username,
        Email:Userupdate.Email,
        Password:Userupdate.Password
    })
    console.log("updated")
}
else{
    console.log("Updated pass is not applicable")
    res.json("not applicable pass")
}
console.log("Email ok")
res.json("Email ok")
    }
    else{
        console.log("Email already exist")
        res.json("Email already exist")
    }
}



module.exports=Updateuser