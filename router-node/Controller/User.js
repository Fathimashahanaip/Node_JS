// const My=(res,res)=>{
//     console.log("Welcome to the user page")
//     res.send("Welcome Gyss")
// }
// module.exports=Myapp
// const UseApp=(req,res)=>{
//     console.log("Welcome");
//     res.send("helloooo user")

// }

// const OwnerApp=(req,res)=>{
//     console.log("Ower llogged");
//     res.send("Welcome Owner");

// }


const User=require("../Models/Userschema")


const schemafunction=async(req,res)=>{

    const{Username,Password,Email}=req.body
    const userDetails=await User.create({
        Username,
        Password,
        Email
    })
    console.log("user data")
    res.json(userDetails)
}





module.exports=schemafunction

