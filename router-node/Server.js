const express=require("express")
const router=require('./Router/TestRouter')
const dotenv=require("dotenv")
dotenv.config()

const app=express()
app.use(express.json())
app.use('/',router)

const connectDB=require('./DataBase/Db')
connectDB()





const PORT =process.env.PORT || 3000
app.listen(PORT,()=>console.log(`server running on port ${PORT}`))

