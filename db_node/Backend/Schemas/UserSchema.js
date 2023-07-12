const mongoose=require("mongoose")
const userschema=mongoose.Schema({
    name:{type:String},
    Place:{type:String},
    Email:{type:String},
    Password:{type:String}
})
const User=mongoose.model("Userstudent",userschema)

module.exports=User