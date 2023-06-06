const mongoose=require("mongoose")
const userschema=mongoose.Schema({
    Username:{type:String},
    Password:{type:String},
    Email:{type:String}

})
const User=mongoose.model("User",userschema)

module.exports=User