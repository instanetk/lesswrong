const lessWrongScraper = require('./scraper');
const postTweet = require('./postTweet');
require('./db')();

// 0 Interval: 1 hour

const interval = async () => {
  const mins = new Date().getMinutes();
  console.log(mins, mins == 0);

  if (mins == 0) {
    console.log('SCRAPING FOR NEW POSTS');
    await lesswrongScraper();
  }
};

// 1 - Scrape content to json file

let firstRun = false;

async function init() {
  if (!firstRun) {
    firstRun = true;
    await lessWrongScraper();
  }
}

init();

setInterval(() => {
  interval();
}, 1000);

// 2 - Post tweet at 1 minute interval

postTweet();
