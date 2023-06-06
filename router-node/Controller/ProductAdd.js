const Product = require("../Models/ProductSchema")

const Productadd=async(req,res)=>{
    const {Category,Name,Model,Price}=req.body
    const addpro=await Product.create({
        Category,
        Name,
        Model,
        Price
    })
    console.log("product added")
res.json(addpro)
}

module.exports=Productadd