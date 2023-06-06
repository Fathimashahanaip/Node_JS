const mongoose=require("mongoose")
const productschema=mongoose.Schema({
    
    Category:{type:String},
    Name:{type:String},
    Model:{type:String},
    Price:{type:Number},


})
const Product=mongoose.model("Product",productschema)


module.exports=Product