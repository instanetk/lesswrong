const LessWrongScraper = require('./scraper');
require('./db')();
const upload = require('./upload');
// 1 - Scrape content to json file

// LessWrongScraper();
upload();

// 2 - Check for new post since last scrape
