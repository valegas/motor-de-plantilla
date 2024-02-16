const express = require("express")
const router = express.Router()
const otherController = require("../controller/other")


router.get("/", otherController.home)


module.exports = router