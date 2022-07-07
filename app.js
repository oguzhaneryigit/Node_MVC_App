const express=require("express")
const ejs = require('ejs');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');

const app=express()
const PORT =8000

app.use(expressLayouts)
app.set("view engine",'ejs')
app.set('views',path.resolve(__dirname,"src/views"))

app.use("/",blogRouter)



app.listen(PORT,()=>{
    console.log("application running on port ",PORT);
})

