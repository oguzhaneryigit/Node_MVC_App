const express=require("express")
const ejs = require('ejs');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');

const app=express()
const PORT =8000

const blogRouter=require("./src/routers/blog_router")

app.use(express.static("./public")) //istek yapılırken public içerisindeki dosyalara erişimi sağlar
app.use(expressLayouts)
app.set("view engine",'ejs')
app.set('views',path.resolve(__dirname,"src/views"))



app.use("/",blogRouter)
app.use("/blog",blogRouter)




app.listen(PORT,()=>{
    console.log("application running on port ",PORT);
})

