const express = require('express');
const router = express.Router();
const Url = require('../../models/Url')

const {fetchUrl} = require('../../controllers/urlController');

router.get('/:urlId', fetchUrl);

module.exports = router;