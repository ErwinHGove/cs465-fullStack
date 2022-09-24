var fs = require('fs');

var abouts = JSON.parse(fs.readFileSync('./data/about.json','utf8'));
var ads = JSON.parse(fs.readFileSync('./data/ads.json','utf8'))

/**
 * GET about view
 */

 const about = (req, res)=>{
    res.render('about',{title: 'Travlr Getaways', abouts, ads});
};

module.exports={
    about
};