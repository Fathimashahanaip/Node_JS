function Token(req,res,next){
     req.Token=true
    console.log("Token Created")
    next()

}
module.exports=Token