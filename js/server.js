const express = require('express');
const cors = require('cors');
const app = express();
const helpers = require('./helper');

app.use(cors());
app.use(express.json());

app.post('/upload', async(request, response) => {
    const check = await helpers.testIfWebsitePhishy(request.body.websiteURL)
    response.json({'phishingWebsite' : check});
});
 
app.listen(8080);
