module.exports= (req,res)=>{
    const arrProductos=[
        {
            id:1,
            name:"Botines Adidas",
            price:110.000,
            discount:25,
            img:"../../public/images/ADGW4605-1.jpeg"
        },
        {
            id:2,
            name:"Adidas",
            price:95.000,
            discount:10,
            img:"../../public/images/ADIG0170-1.jpeg"
        },
        {
            id:3,
            name:"FILA",
            price:65.000,
            discount:15,
            img:"../../public/images/FIF01R00058-1883-1.jpeg"
        },
        {
            id:4,
            name:"Kapa",
            price:45.000,
            discount:10,
            img:"../../public/images/KA136193PW909T-1.jpeg"
        },
        {
            id:5,
            name:"Botines Kapa",
            price:70.000,
            discount:20,
            img:"../../public/images/KA1381M47W911U-1.jpeg"
        },
        {
            id:6,
            name:"Botines Nike",
            price:25.000,
            discount:25,
            img:"../../public/images/NI_DA1331-176-1.jpeg"
        },
        {
            id:7,
            name:"Nike",
            price:50.000,
            discount:20,
            img:"../../public/images/NICW4555-012-1.jpeg"
        },
        {
            id:8,
            name:"Olympikus",
            price:90.000,
            discount:10,
            img:"../../public/images/OLK41419157PTSTWT-1.jpeg"
        },
        {
            id:9,
            name:"Puma",
            price:100.000,
            discount:30,
            img:"../../public/images/PU307995-01-1.jpeg"
        },
        {
            id:10,
            name:"Topper",
            price:80.000,
            discount:20,
            img:"../../public/images/TO_29700-1.jpeg"
        },
    ];
    const producId = req.params.id;

    const productFind = arrProductos.find((product)=> product.id == producId);
    
    res.render("detalle",{product: productFind});
};