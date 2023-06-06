function Validation(req,res,next){
    if(req.Token){
        console.log("Validated")
        

    }
    next();
    
}
module.exports=Validation