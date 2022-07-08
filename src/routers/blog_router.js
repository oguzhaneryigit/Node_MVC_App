const router = require('express').Router();
const blogController = require('../controllers/blog_controller');
const { listAllLeauges } = require('../controllers/leauge_controller');


router.get("/articles",blogController.listAllArticles);
router.get("/leauges" ,listAllLeauges );



module.exports=router;