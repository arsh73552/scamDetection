const axios = require('axios');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

// axios
//   .get("https://who.is/whois/asdasdadasdasd.com")
//   .then(function (response) {
//     const dom = new JSDOM(response.data);
//     [...dom.window.document.querySelectorAll('.queryResponseBodyValue')].forEach(el => console.log(`- ${el.textContent}`));
//    });
var myString = ""
async function getWhoisResult(url)
{
    myAxiosCall = async () => {
        return await axios.get('/the-url');
      }
    return myAxiosCall

    // const message = await axios
    // .get("https://who.is/whois/google.com")
    // .then(async function (response) {
    // const dom = await new JSDOM(response.data);
    // [...dom.window.document.querySelectorAll('.queryResponseBodyValue')]})
    // console.log(message)
    // return myString
}


console.log(getWhoisResult('google.com'))
   