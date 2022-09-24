var fs = require('fs');

var vacationTips = JSON.parse(fs.readFileSync('./data/vacationTips.json','utf8'));

var latestNews = JSON.parse(fs.readFileSync('./data/latestNews.json','utf8'));


/**
 * GET news view
 */

 const news = (req, res)=>{
    res.render('news',{title: 'Travlr Getaways',vacationTips,latestNews});
};

module.exports={
    news
};