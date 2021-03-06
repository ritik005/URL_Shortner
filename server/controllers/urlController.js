const Url = require('../models/Url');
const shortId = require("shortid");
const utils = require('../utils/utils');
require('dotenv').config();

const shortUrl = async (req,res)=> {
    const { originalUrl } = req.body;
    const base = process.env.BASE;
    const urlId = shortId.generate();
    if(utils.validateUrl(originalUrl)){
        try{
            let url = await Url.findOne({ originalUrl });
            if(url){
                return res.status(200).json({ url});
            } else {
                const shortUrl = `${base}/${urlId}`;
                url = new Url({
                    urlId,
                    originalUrl,
                    shortUrl,
                    date: new Date()
                });
                await url.save();
                return res.status(200).json({url});
            }
        } catch(e){
            return res.status(500).json({message : "Something went wrong"});
        }
    }else{
        return res.status(400).json({message: 'Invalid Url'});
    }
}

const fetchUrl = async (req,res)=> {
    try{
       const url = await Url.findOne({urlId : req.params.urlId});
       if(url){
          url.clicks++;
          url.save();
          return res.redirect(url.originalUrl);
       }
       else return res.status(404).json({message : 'Not found'});
    } catch(err){
       return res.status(404).json({message: "Something went wrong"});
    }
};

module.exports = {shortUrl,fetchUrl};