require("dotenv").config();

const express = require('express');
const cors = require('cors');
const path = require('path')
const app = express();
const helpers = require('./public/js/helper');
const PORT = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname , 'public')));


app.post('/upload', async(request, response) => {
    const check = await helpers.testIfWebsitePhishy(request.body.websiteURL)
    response.json({'phishingWebsite' : check});
});
 
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
