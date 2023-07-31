const whois = require('whois');
const extract = require('./extract');
const infer = require('./inference.js')
var domain = ""
/**
 * Checks whether the given string contains the pattern.
 *
 * @param {string} str - The input string to be checked for the presence of the pattern.
 * @param {string} pattern - The pattern to be looked for in the input str.
 * @returns {number} - Returns 1 if the pattern is found, otherwise returns 0.
 */

function getDomainLen(url){
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    url = 'https://' + url;
  }
  const parsedURL = new URL(url);
  domain = (parsedURL.hostname)
  return (parsedURL.hostname).length;
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

async function listForModel(url){
  var inputList = [];
  const result = await extract.getWhoisValidity(domain);
  const result2 = await extract.getActiveDuration(domain);
  inputList.push(extract.containsIPAddress(url));
  inputList.push(result);
  inputList.push(result2);
  inputList.push(url.length);
  inputList.push(checkForPat(url, '@'));
  inputList.push(checkForPat(url, '//'));
  inputList.push(checkForPat(url, '-'));
  inputList.push(getDomainLen(url))
  return inputList;
}

async function getFinalOutput(url)
{
  getDomainLen(url)
  var inputList = await listForModel(url);
  var output = await infer.testList(inputList);
  return output;
}

async function testIfWebsitePhishy(url)
{
  let output = await getFinalOutput(url)
  if(output.dense_3.data[0] > 0.5)
  {
    console.log("Returning True!")
    return true;
  }
  console.log("Returning False!")
  return false;
}

module.exports = {listForModel, testIfWebsitePhishy};