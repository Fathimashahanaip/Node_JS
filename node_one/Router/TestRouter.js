const express=require("express")
const router=express.Router()

const User=require("../Controller/User")

router.route("/user").get(User)