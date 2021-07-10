const express = require('express');
const bodyParser = require('body-parser');
require('./config/dbconnection');
const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));

app.use('/', require('./routes/api/index'));
app.use('/api/url', require('./routes/api/url'));

app.listen(PORT, (err) => {
    if(err){
        console.log(`There is some error while running the server`);
        return;
    }
    console.log(`Welcome! your server is running on the PORT ${PORT}`)
})