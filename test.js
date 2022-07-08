const {createResult} = require('./src/utils/result')
const models = require('./src/models/leauge_model');

models.getLeauges().then(x=>console.log(x.data))
//console.log(result())