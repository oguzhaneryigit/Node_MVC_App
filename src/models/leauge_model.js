const axios = require('axios');

const getLeauges = async ()=>{
    let leauges = await axios.get("https://api-football-standings.azharimm.site/leagues");
    //console.log(leauges);
    return leauges;
}

module.exports={
    getLeauges
}