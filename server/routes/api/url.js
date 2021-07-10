const express = require('express');
const router = express.Router();

const { shortUrl } = require('../../controllers/urlController');

router.post('/short', shortUrl);

module.exports = router;