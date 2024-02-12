const express = require("express")
const app = express()
const port = 3030;

const otherRutes=require("./routes/other.routes")
const productsRoutes=require("./routes/products.routes")

app.use(express.static("public"))

app.set("view engine","ejs");
app.set("views","/views")
