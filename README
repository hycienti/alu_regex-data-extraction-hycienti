# ALU Regex Data Extraction

This project is designed to extract specific data types from a given input string using **Regular Expressions (Regex)** in **JavaScript**. The data types extracted include:
- Email addresses
- URLs
- Phone numbers
- Credit card numbers
- HTML tags
- Hashtags
- Currency amounts
- Time in 12-hour and 24-hour formats

This project is part of an assignment for a Junior Full Stack Developer role, where the goal is to demonstrate proficiency in using Regex for data extraction.

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [Regex Patterns Explained](#regex-patterns-explained)
3. [How to Run the Code](#how-to-run-the-code)
4. [Code Explanation](#code-explanation)
5. [Sample Input and Output](#sample-input-and-output)
6. [Repository Structure](#repository-structure)
7. [Testing and Edge Cases](#testing-and-edge-cases)
8. [License](#license)

---

## Project Overview

The goal of this project is to extract specific data types from a large input string using Regex. The input string can contain hundreds of pages of text, and the script will identify and extract the required data types efficiently.

### Data Types Extracted:
1. **Email Addresses**: e.g., `user@example.com`
2. **URLs**: e.g., `https://www.example.com`
3. **Phone Numbers**: e.g., `(123) 456-7890`, `123-456-7890`
4. **Credit Card Numbers**: e.g., `1234 5678 9012 3456`, `1234-5678-9012-3456`
5. **HTML Tags**: e.g., `<p>`, `<div class="example">`
6. **Hashtags**: e.g., `#example`, `#ThisIsAHashtag`
7. **Currency Amounts**: e.g., `$19.99`, `$1,234.56`
8. **Time Formats**: e.g., `14:30` (24-hour), `2:30 PM` (12-hour)

---

## Regex Patterns Explained

Here’s a breakdown of the Regex patterns used in the code:

1. **Email Addresses**:
   - `[a-zA-Z0-9._%+-]+`: Matches the local part of the email (before the `@`).
   - `@[a-zA-Z0-9.-]+`: Matches the domain name.
   - `\.[a-zA-Z]{2,}`: Matches the top-level domain (e.g., `.com`, `.org`).

2. **URLs**:
   - `https?:\/\/`: Matches `http://` or `https://`.
   - `[^\s]+`: Matches any non-whitespace characters after the protocol.

3. **Phone Numbers**:
   - `\(?\d{3}\)?`: Matches optional parentheses around the area code.
   - `[-.\s]?`: Matches optional separators like `-`, `.`, or space.
   - `\d{3}[-.\s]?\d{4}`: Matches the remaining digits of the phone number.

4. **Credit Card Numbers**:
   - `\b\d{4}[- ]?\d{4}[- ]?\d{4}[- ]?\d{4}\b`: Matches 16-digit credit card numbers with optional separators (`-` or space).

5. **HTML Tags**:
   - `<[^>]+>`: Matches any text within `<` and `>`.

6. **Hashtags**:
   - `#\w+`: Matches hashtags starting with `#` followed by word characters.

7. **Currency Amounts**:
   - `\$\d{1,3}(,\d{3})*(\.\d{2})?`: Matches currency amounts like `$19.99` or `$1,234.56`.

8. **24-Hour Time**:
   - `\b(?:[01]?\d|2[0-3]):[0-5]\d\b`: Matches time in 24-hour format (e.g., `14:30`).

9. **12-Hour Time**:
   - `\b(?:1[0-2]|0?[1-9]):[0-5]\d\s?(?:AM|PM)\b`: Matches time in 12-hour format (e.g., `2:30 PM`).

---

## How to Run the Code

### Prerequisites
- Install [Node.js](https://nodejs.org/) (if not already installed).

### Steps to Run:
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/alu_regex-data-extraction-yourusername.git
   ```
2. **Navigate to the Project Directory**:
   ```bash
   cd alu_regex-data-extraction-yourusername
   ```
3. **Run the Script**:
   ```bash
   node index.js
   ```

---

## Code Explanation

### Key Components:
1. **Input String**:
   - The `inputString` variable contains a sample string with various data types embedded in it.

2. **Regex Patterns**:
   - The `regexPatterns` object stores all the Regex patterns for extracting different data types.

3. **Extract Function**:
   - The `extractData` function takes an input string and a Regex pattern, and returns an array of matches.

4. **Output**:
   - The script logs the extracted data to the console.

---

## Sample Input and Output

### Input:
```javascript
const inputString = `
  Contact us at support@example.com or visit https://www.example.com for more info.
  Call us at (123) 456-7890 or 123-456-7890.
  Here's some HTML: <p>Hello World</p> and <div class="example">Content</div>.
  Payment can be made using 1234 5678 9012 3456 or 1234-5678-9012-3456.
  Follow us on #example and #ThisIsAHashtag.
  Prices start at $19.99 and go up to $1,234.56.
  The meeting is at 14:30 or 2:30 PM.
`;
```

### Output:
```
Email Addresses: [ 'support@example.com' ]
URLs: [ 'https://www.example.com' ]
Phone Numbers: [ '(123) 456-7890', '123-456-7890' ]
Credit Card Numbers: [ '1234 5678 9012 3456', '1234-5678-9012-3456' ]
HTML Tags: [ '<p>Hello World</p>', '<div class="example">Content</div>' ]
Hashtags: [ '#example', '#ThisIsAHashtag' ]
Currency Amounts: [ '$19.99', '$1,234.56' ]
24-Hour Time: [ '14:30' ]
12-Hour Time: [ '2:30 PM' ]
```

---

## Repository Structure

```
alu_regex-data-extraction-yourusername/
├── index.js               # Main JavaScript file for data extraction
├── README.md              # Project documentation
├── test-input.txt         # Sample input file for testing
```

---

## Testing and Edge Cases

### Test Cases:
1. **Valid Inputs**:
   - Ensure the script extracts all valid data types correctly.
2. **Invalid Inputs**:
   - Test with malformed emails, invalid URLs, or incomplete phone numbers to ensure the Regex handles edge cases gracefully.

### Example Edge Cases:
- Emails: `user@.com`, `user@com`
- URLs: `http://`, `https://example`
- Phone Numbers: `1234567890`, `123-456-789`
- Credit Cards: `1234 5678 9012`, `1234-5678-9012-345`

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

Happy Coding! 🚀