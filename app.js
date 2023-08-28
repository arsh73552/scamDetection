require("dotenv").config();

const express = require('express');
const cors = require('cors');
const path = require('path')
const axios = require('axios');
const app = express();
const helpers = require('./public/js/helper');
const PORT = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname , 'public')));


app.get('/proxy', async (request, response) => {
    const websiteURL = request.query.url;
    console.log(websiteURL)
    try {
      const proxyResponse = await axios.get(websiteURL);
      
      Object.entries(proxyResponse.headers).forEach(([key, value]) => {
        response.setHeader(key, value);
      });
  
      response.send(proxyResponse.data);
    } catch (error) {
      console.error(error);
      response.status(500).send('Error proxying the request');
    }
  });

app.post('/upload', async(request, response) => {
    const check = await helpers.testIfWebsitePhishy(request.body.websiteURL)
    response.json({'phishingWebsite' : check});
});
 
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
