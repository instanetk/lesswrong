const lessWrongScraper = require('./scraper');
const postTweet = require('./postTweet');
require('./db')();

// 0 Interval: 1 hour

const timerToRunAtXMinutes = async () => {
  const mins = new Date().getMinutes();
  console.log(mins, mins == 59);

  if (mins == 59) {
    console.log('SCRAPING FOR NEW POSTS');
    await lessWrongScraper();
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
  timerToRunAtXMinutes();
}, 1000 * 60); //once a minute

// 2 - Post tweet at 1 minute interval

postTweet();
