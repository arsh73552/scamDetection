const whois = require('whois');
var valid = 0
/**
 * Checks whether the given string contains the pattern.
 *
 * @param {string} str - The input string to be checked for the presence of the pattern.
 * @param {string} pattern - The pattern to be looked for in the input str.
 * @returns {number} - Returns 1 if the pattern is found, otherwise returns 0.
 */
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

