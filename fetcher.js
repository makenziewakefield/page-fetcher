const request = require('request');
const fs = require('fs');

const fetcher = (url, filePath) => {
  request(url, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      fs.writeFile(filePath, body, (err) => {
        if (!err) {
          console.log(`Data from ${url} has been saved to ${filePath}`);
        }
      })
    }
  })
}

const url = process.argv[2];
const filePath = process.argv [3];

fetcher(url, filePath);