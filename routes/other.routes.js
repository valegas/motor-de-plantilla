const express = require("express")
const router = express.Router()
const otherController= require("../controller/other/home.controller")


router.get("/", otherController.home)



module.exports= router