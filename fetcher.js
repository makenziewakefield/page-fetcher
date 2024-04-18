const request = require('request');
const fs = require('fs');

const fetcher = (url, filePath) => {
  request(url, (error, response, body) => {
    if (error) {
      console.error('Error fetching data: ', error);
    } else if (response.statusCode !== 200) {
      console.error('Unexpected status code: response.statusCode');
    } else {
      fs.writeFile(filePath, body, (err) => {
        if (err) {
          console.error('Error writing to file: ', err);
        } else {
          const fileSize = Buffer.byteLength(body, 'utf-8');
          console.log(`Downloaded and saved ${fileSize} bytes to ${filePath}`);
        }
      })
    }
  })
}

const url = process.argv[2];
const filePath = process.argv [3];

if (!url || !filePath) {
  console.error('Please provide a URL and a file path');
} else if (fs.existsSync(filePath)) {
  console.error('File already exists. Please provide a different file path.');
} else {
  fetch(url, filePath);
}