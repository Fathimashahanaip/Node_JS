const jwt=require("jsonwebtoken")

const Middtoken=async(req,res,next)=>{
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer"))
    {
        try{
            token=req.headers.authorization.split(" ")[1]
            jwt.verify(token,`${process.env.JWT_SECRET}`)
            next()
        }
        catch(error)
        {
            res.status(401)
            res.json("not authorized")
            throw new Error("not authorized,no token")

        }
    }
    if(!token)
    {
        res.status(401).send("No token")
        throw new Error("not authorized token")
        // res.json("no token found")
    }
}
module.exports=Middtoken

