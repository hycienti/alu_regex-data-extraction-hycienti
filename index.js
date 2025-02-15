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
  phone: /\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g,
  creditCard: /\b\d{4}[- ]?\d{4}[- ]?\d{4}[- ]?\d{4}\b/g,
  html: /<[^>]+>/g,
  hashtag: /#\w+/g,
  currency: /\$\d{1,3}(,\d{3})*(\.\d{2})?/g,
  time24: /\b(?:[01]?\d|2[0-3]):[0-5]\d\b/g,
  time12: /\b(?:1[0-2]|0?[1-9]):[0-5]\d\s?(?:AM|PM)\b/gi,
};

// Function to extract data using Regex
function extractData(input, regex) {
  const matches = input.match(regex);
  return matches || [];
}

// Extract and display results
console.log("Email Addresses:", extractData(inputString, regexPatterns.email));
console.log("URLs:", extractData(inputString, regexPatterns.url));
console.log("Phone Numbers:", extractData(inputString, regexPatterns.phone));
console.log(
  "Credit Card Numbers:",
  extractData(inputString, regexPatterns.creditCard)
);
console.log("HTML Tags:", extractData(inputString, regexPatterns.html));
console.log("Hashtags:", extractData(inputString, regexPatterns.hashtag));
console.log(
  "Currency Amounts:",
  extractData(inputString, regexPatterns.currency)
);
console.log("24-Hour Time:", extractData(inputString, regexPatterns.time24));
console.log("12-Hour Time:", extractData(inputString, regexPatterns.time12));