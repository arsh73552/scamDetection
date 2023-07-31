const axios = require('axios');
const moment = require('moment');

/**
 * Fetches WHOIS information for a given URL by making a request to the "https://who.is" API using Axios.
 *
 * @async
 * @param {string} url - The URL for which WHOIS information is to be retrieved.
 * @returns {Promise} - A Promise that resolves to the response from the API.
 *
 * @example
 * // Fetch WHOIS information for "example.com"
 * const resultPromise = axiosResponse("example.com");
 * resultPromise.then((response) => {
 *   // Handle the response data here
 * }).catch((error) => {
 *   // Handle errors, if any
 * });
 */
async function axiosResponse(url) {
    // Combine the base URL with the provided URL to form the complete request URL.
    url = "https://who.is/whois/" + url;
  
    // Make an asynchronous GET request using Axios.
    return await axios.get(url);
  }

/**
 * Asynchronously checks the validity of a given URL using WHOIS information fetched from the "https://who.is" API.
 *
 * @async
 * @param {string} url - The URL to check the validity for.
 * @returns {Promise<number>} - A Promise that resolves to the validity status: 1 if the URL is valid, 0 if not.
 *
 * @example
 * // Check the validity of "example.com" URL
 * const isValid = await getWhoisValidity("example.com");
 * // isValid will be 1 if the URL is valid, and 0 if it's not valid or no match found.
 */
async function getWhoisValidity(url) {
    // Fetch WHOIS information for the URL using axiosResponse function
    let response = await axiosResponse(url);
  
    // Check if the response data contains "No match", indicating the URL is not valid
    if (response.data.includes('No match'))
      return 0;
    
    // If "No match" not found, consider the URL as valid
    return 1;
  }

/**
 * Asynchronously calculates the active duration (in days) of a given URL based on its registration date
 * using WHOIS information fetched from the "https://who.is" API.
 *
 * @async
 * @param {string} url - The URL to get the active duration for.
 * @returns {Promise<number>} - A Promise that resolves to the active duration in days.
 *
 * @example
 * // Get the active duration of "example.com" URL
 * const activeDuration = await getActiveDuration("example.com");
 * // activeDuration will be the number of days the URL has been active since its registration date.
 */
async function getActiveDuration(url) {
    // Fetch WHOIS information for the URL using axiosResponse function
    let response = await axiosResponse(url);
  
    // Check if the response data contains "No match", indicating the URL is not valid
    if (response.data.includes('No match'))
      return 0;
  
    // If the URL is valid, parse the registration date from the WHOIS response
    let data = response.data;
    const regex = /<div class="col-md-4 queryResponseBodyKey">Registered On<\/div>\s*<div class="col-md-8 queryResponseBodyValue">(\d{4}-\d{2}-\d{2})<\/div>/;
    const match = data.match(regex);
    const scrapedDate = match[1].trim();
  
    // Calculate active day duration from today
    const today = moment();
    const registeredDate = moment(scrapedDate, 'YYYY-MM-DD');
    const activeDuration = moment.duration(today.diff(registeredDate));
    const activeDays = activeDuration.asDays();
  
    return activeDays.toFixed(2);
  }
 
async function containsIPAddress(str) {
  // Regular expression pattern to match an IP address
  const ipAddressPattern = /\b(?:\d{1,3}\.){3}\d{1,3}\b/;

  // Use the test method of RegExp to check if the pattern matches the string
  return ipAddressPattern.test(str);
}

module.exports = {getActiveDuration, getWhoisValidity, containsIPAddress};