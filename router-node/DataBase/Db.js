const mongoose = require("mongoose")

const connectDB=async()=>{
    try{
        const conn= await mongoose.connect("mongodb+srv://Fathimashahanaip:Fathima123@cluster0.lozfypq.mongodb.net/",{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        console.log("Database Connected")
    }catch(error)
    {
        console.log(`error:${error}`)
        process.exit()
    }
}
module.exports=connectDB;