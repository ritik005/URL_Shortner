const Url = require('../models/Url');
const shortId = require("shortid");

const shortUrl = async (req,res)=> {
    const { originalUrl } = req.body;
    // return res.status(200).json({message: "Good I'm here"});
}
module.exports = {shortUrl};