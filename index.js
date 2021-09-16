const LessWrongScraper = require('./scraper');
const postTweet = require('./postTweet');
const upload = require('./upload');

require('./db')();

// 1 - Scrape content to json file
// Interval: 1 hour

setInterval(function () {
  LessWrongScraper();
}, 3600000);

setInterval(function () {
  upload(); // Uploads new items to DB
}, 3900000);

// 2 - Post tweet at 1 minute interval

postTweet();
