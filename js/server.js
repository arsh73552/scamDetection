const express = require('express');
const cors = require('cors');
const app = express();
const helpers = require('./helper');

app.use(cors());
app.use(express.json());

app.post('/upload', function (request, response) 
{
    async ()=>{
        const check = await helpers.testIfWebsitePhishy(request.body.websiteURL)
        res.json({'check': check})
    }
    console.log(request.body.websiteURL);
});
 
app.listen(8080);
