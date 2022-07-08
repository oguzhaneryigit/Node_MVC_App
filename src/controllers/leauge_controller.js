const {createResult,createSuccessResult,createErrorResult} = require('../utils/result');
const leaugeModel = require('../models/leauge_model');

const listAllLeauges=async (req,res,next)=>{
    try{
        let leauges=await leaugeModel.getLeauges();
        console.log(leauges.data.data[0].name)
        res.render("leauge_index.ejs",createSuccessResult(leauges.data.data,"list of all leauges"))
    }catch(err){
        console.log("error occured")
        console.log(err);
        console.log(err.data)
        console.log(err.status)
        console.log(err.header)
        res.render("leauge_index.ejs",createErrorResult())
    }
}

module.exports = {
    listAllLeauges
}