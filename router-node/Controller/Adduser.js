const User = require("../Models/Userschema")



const Adduser=async(req,res)=>{

    const {Username,Password,Email}=req.body
     const Emailcheck=await User.findOne({Email})
     const passlength=Password.length
     if(!Username || !Email || !Password){
        console.log("all details are compulsary")
        res.json("all details are compulsary")
     }
    else if(!Emailcheck){
        
        if(passlength>8){
           
    const adduser=await User.create({
        Username,
        Password,
        Email
    })
    

    console.log(adduser)
    res.json(adduser)
    

        }
        else{
            console.log("inpass")
            res.json("incorrect pass")
        }


}


else{
    console.log("User not added")
    res.json("user Already exist")
}
}
// else{
//     console.log("cannot create user")
//     res.json("not all details enterd")
// }



module.exports=Adduser