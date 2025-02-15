// Sample input string containing various data types
const inputString = `
  Contact us at support@alueducation.com or visit https://www.alueducation.com for more info.
  Call us at (123) 456-7890 or 123-456-7890.
  Here's some HTML: <p>Hello World</p> and <div class="example">Content</div>.
  Payment can be made using 1234 5678 9012 3456 or 1234-5678-9012-3456.
  Follow us on #example and #ThisIsAHashtag.
  Prices start at $19.99 and go up to $1,234.56.
  The meeting is at 14:30 or 2:30 PM.
`;

// Regex patterns for extraction
const regexPatterns = {
  email: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g,
  url: /https?:\/\/[^\s]+/g,
};

// Function to extract data using Regex
function extractData(input, regex) {
  const matches = input.match(regex);
  return matches || [];
}

// Extract and display results
console.log("Email Addresses:", extractData(inputString, regexPatterns.email));
console.log("URLs:", extractData(inputString, regexPatterns.url));
