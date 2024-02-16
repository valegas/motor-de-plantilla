const express = require("express")
const app = express()
const port = 3030;
const path = require("path")

const otherRoutes = require("./routes/other.routes")
const productsRoutes= require("./routes/products.routes")

app.use(express.static("public"))

app.set("view engine","ejs");
app.set("views","./views")



app.use("/",otherRoutes)
app.use("/productos",productsRoutes)




app.listen(port, () => console.log(`http://localhost:${port}`))