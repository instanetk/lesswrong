const lessWrongScraper = require('./scraper');
const postTweet = require('./postTweet');
require('./db')();

// 1 - Scrape content to json file
// Interval: 1 hour

let firstRun = false;

async function init() {
  if (!firstRun) {
    firstRun = true;
    await lessWrongScraper();
  }
}

init();

setInterval(async function () {
  await lessWrongScraper();
}, 3600000);

// 2 - Post tweet at 1 minute interval

postTweet();
