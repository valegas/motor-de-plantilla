module.exports= (req,res)=>{
    const arrProducto=[
        {
            id:1,
            name:"",
            price:111111,
            discount:20,
            // img:
        },
        {
            id:2,
            name:"",
            price:111111,
            discount:20,
            // img:
        },
        {
            id:3,
            name:"",
            price:111111,
            discount:20,
            // img:
        },
        {
            id:4,
            name:"",
            price:111111,
            discount:20,
            // img:
        },
        {
            id:5,
            name:"",
            price:111111,
            discount:20,
            // img:
        },
        {
            id:6,
            name:"",
            price:111111,
            discount:20,
            // img:
        },
        {
            id:7,
            name:"",
            price:111111,
            discount:20,
            // img:
        },
        {
            id:8,
            name:"",
            price:111111,
            discount:20,
            // img:
        },
        {
            id:9,
            name:"",
            price:111111,
            discount:20,
            // img:
        },
        {
            id:10,
            name:"",
            price:111111,
            discount:20,
            // img:
        },
        {
            id:11,
            name:"",
            price:111111,
            discount:20,
            // img:
        },
        {
            id:12,
            name:"",
            price:111111,
            discount:20,
            // img:
        },
    ];
    res.render("index",{
        products:arrProducto
    });
};