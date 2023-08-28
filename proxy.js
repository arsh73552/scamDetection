const express = require('express');
const cors = require('cors');
const path = require('path');
const axios = require('axios');
const app = express();
const helpers = require('./public/js/helper');
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/proxy', async (request, response) => {
  const websiteURL = request.query.url;

  try {
    const proxyResponse = await axios.get(websiteURL, { responseType: 'arraybuffer' });

    // Pass on CORS headers from the target website to the client
    Object.entries(proxyResponse.headers).forEach(([key, value]) => {
      response.setHeader(key, value);
    });

    // Set the correct content type for the response
    const contentType = proxyResponse.headers['content-type'];
    response.setHeader('content-type', contentType);

    // Send the response data from the target website to the client
    response.send(proxyResponse.data);
  } catch (error) {
    console.error(error);
    response.status(500).send('Error proxying the request');
  }
});

// Add a catch-all route to handle other resource requests
app.get('*', async (request, response) => {
  const websiteURL = request.query.url;

  try {
    const proxyResponse = await axios.get(websiteURL, { responseType: 'arraybuffer' });

    // Pass on CORS headers from the target website to the client
    Object.entries(proxyResponse.headers).forEach(([key, value]) => {
      response.setHeader(key, value);
    });

    // Set the correct content type for the response
    const contentType = proxyResponse.headers['content-type'];
    response.setHeader('content-type', contentType);

    // Send the response data from the target website to the client
    response.send(proxyResponse.data);
  } catch (error) {
    console.error(error);
    response.status(500).send('Error proxying the request');
  }
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
