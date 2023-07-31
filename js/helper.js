const whois = require('whois');
const extract = require('./extract');
var valid = 0
/**
 * Checks whether the given string contains the pattern.
 *
 * @param {string} str - The input string to be checked for the presence of the pattern.
 * @param {string} pattern - The pattern to be looked for in the input str.
 * @returns {number} - Returns 1 if the pattern is found, otherwise returns 0.
 */

function getDomainLen(url){
  const parsedURL = new URL(url);
  return (parsedURL.hostname).len;
}

function checkForPat(str, pattern) {
    if (typeof str === 'string' && str.includes(pattern)) {
      return 1; // pattern is found, return 1
    } else {
      return 0; // pattern is not found, return 0
    }
  }


async function checkWhois(url) 
{
    var required = "hehexd"
    const c = await whois.lookup(url,(err, data) =>{
        required = data;
    })
    return required;
}   

async function getWhoisResult(url) 
{
    const message = await checkWhois(url);
    return message;
}

setTimeout(function(){ 
    console.log(checkWhois("google.com"))
}, 3000);

async function listForModel(url){
  var inputList = [];

  
  const result = await extract.getWhoisValidity('google.com');
  console.log(result);
  const result2 = await extract.getActiveDuration('google.com');
  console.log(result2);
  inputList.push(1);
  inputList.push(2);
  inputList.push(3);

  // inputList.push(extract.containsIPAddress(url));
  // inputList.push(result);
  // inputList.push(result2);
  // inputList.push(url.length);
  // inputList.push(checkForPat(url, '@'));
  // inputList.push(checkForPat(url, '//'));
  // inputList.push(checkForPat(url, '-'));
  //inputList.push(getDomainLen(url));
  
  return inputList;
}

console.log(listForModel("google.com"));
module.exports = {listForModel};