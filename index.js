const LessWrongScraper = require('./scraper');
const postTweet = require('./postTweet');
require('./db')();

// 1 - Scrape content to json file & Upload to DB
// Interval: 1 hour

setInterval(function () {
  LessWrongScraper();
}, 36000000);

// 2 - Post tweet at 1 minute interval

postTweet();
