const {createResult} = require('../utils/result');

const listAllArticles=async (req,res,next)=>{
    res.render("blog_index.ejs",createResult())
}

module.exports = {
    listAllArticles
}