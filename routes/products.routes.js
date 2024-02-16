const express = require("express")
const router = express.Router()
const productController = require("../controller/products")


router.get("/detalle/:id", productController.detail)

module.exports = router