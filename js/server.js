const express = require('express');
const cors = require('cors');
const app = express();
const runtest = require('./inference');
const helpers = require('./helper');

app.use(cors());
app.use(express.json());

app.post('/upload', function (request, response) {
    response.send("(O).(O) HELLO WORLD :-) uwu ^^ HEHEXD (O).(O)");
    console.log(request.body.websiteURL);

});

app.listen(8080);
