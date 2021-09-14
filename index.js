const LessWrongScraper = require('./scraper');
require('./db')();

// 1 - Scrape content to json file

LessWrongScraper();

// 2 - Check for new post since last scrape
