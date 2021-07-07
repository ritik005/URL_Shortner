const express = require('express');;

const app = express();
const PORT = process.env.PORT || 8000;

app.listen(PORT, (err) => {
    if(err){
        console.log(`There is some error while running the server`);
        return;
    }
    console.log(`Welcome! your server is running on the PORT ${PORT}`)
})