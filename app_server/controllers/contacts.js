/**
 * GET contacts view
 */

 const contacts = (req, res)=>{
    res.render('contacts',{title: 'Travlr Getaways'});
};

module.exports={
    contacts
};