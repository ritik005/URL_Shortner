const express = require('express');
const router = express.Router();

const { shortUrl } = require('../../controllers/urlController');

router.get('/',(req,res)=>{
   return res.status(200).json({message: 'Everything is all right'});
});
router.get('/short', shortUrl);

module.exports = router;