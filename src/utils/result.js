
let createResult=(success=false,data={},message="invalid operation")=>{
    return {success,message,data}; 
}
let createErrorResult=(data={},message="error opperation")=>{
    return {success:false,message,data};  
}
let createSuccessResult=(data={},message="success operation")=>{
    return {success:true,message,data}; 
}
module.exports={createResult,createErrorResult,createSuccessResult};