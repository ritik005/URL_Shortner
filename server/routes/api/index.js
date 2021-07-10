const express = require('express');
const router = express.Router();
const Url = require('../../models/Url')

router.get('/:urlId', async(req,res) => {
    try{
       const url = await Url.findOne({urlId : req.params.urlId});
       if(url){
          url.clicks++;
          url.save();
          return res.redirect(url.originalUrl);
       }else{
          return res.status(404).json('Not found');
       }
    } catch(err){
       console.log(err);
    }
 });

module.exports = router;