const {createResult,createSuccessResult,createErrorResult} = require('../utils/result');
const leaugeModel = require('../models/leauge_model');

const listAllLeauges=async (req,res,next)=>{
    try{
        let leauges=await leaugeModel.getLeauges().data;
        res.render("leauge_index.ejs",createSuccessResult(leauges,"list of all leauges"))
    }catch(err){
        console.log(err.data)
        console.log(err.status)
        console.log(err.header)
        res.render("leauge_index.ejs",createErrorResult(leauges))
    }
}

module.exports = {
    listAllLeauges
}