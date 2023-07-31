function containsIPAddress(str) {
  // Regular expression pattern to match an IP address
  const ipAddressPattern = /\b(?:\d{1,3}\.){3}\d{1,3}\b/;

  // Use the test method of RegExp to check if the pattern matches the string
  return ipAddressPattern.test(str);
}

console.log(containsIPAddress("192.168.1.1.com"))