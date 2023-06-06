const Product = require("../Models/ProductSchema")

const Getproduct=async(res,req)=>{
 const id=req.params.id
    
    const products=await Product.findById({id})
    console.log(products)
    res.json(products)
}
module.exports=Getproduct