const request = require('request');
const fs = require('fs');

const fetcher = (url, filePath) => {
  request(url, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      fs.writeFile(filePath, body, (err) => {
        if (!err) {
          const fileSize = Buffer.byteLength(body, 'utf8');
          console.log(`Downloaded and saved ${fileSize} bytes to ${filePath}`);
        }
      })
    }
  })
}

const url = process.argv[2];
const filePath = process.argv [3];

fetcher(url, filePath);