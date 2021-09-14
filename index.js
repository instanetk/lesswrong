const { Scraper, Root, OpenLinks, CollectContent } = require('nodejs-web-scraper');
const fs = require('fs');

(async () => {
  const pages = []; //All ad pages.

  //pageObject will be formatted as {title,phone,images}, becuase these are the names we chose for the scraping operations below.
  //Note that each key is an array, because there might be multiple elements fitting the querySelector.
  //This hook is called after every page finished scraping.
  //It will also get an address argument.
  const getPageObject = (pageObject, address) => {
    let article = {
      title: pageObject.title[0],
      date: pageObject.date[0],
      author: pageObject.author[0],
      url: address,
    };

    // Ensure only posts URL are indexed, exclude all other paths or external domains

    let regex = new RegExp('https://www.lesswrong.com/posts');
    if (regex.test(article.url)) {
      pages.push(article);
    }
  };

  const config = {
    baseSiteUrl: `https://www.lesswrong.com/`,
    startUrl: `https://www.lesswrong.com/allPosts`,
    // filePath: './images/',
    logPath: './logs/',
  };

  const scraper = new Scraper(config);

  const root = new Root(); //Open pages 1-10. You need to supply the querystring that the site uses(more details in the API docs).

  const lessWrong = new OpenLinks('.PostsTitle-root a', { name: 'lesswrong', getPageObject }); //Opens every job ad, and calls the getPageObject, passing the formatted dictionary.

  // const phones = new CollectContent('.details-desc a.tel', { name: 'phone' })//Important to choose a name, for the getPageObject to produce the expected results.

  const titles = new CollectContent('.PostsPageTitle-root', { name: 'title' });
  const date = new CollectContent('.PostsPageDate-date', { name: 'date' });
  const author = new CollectContent('.UsersNameDisplay-userName', { name: 'author' });

  root.addOperation(lessWrong);
  lessWrong.addOperation(titles);
  lessWrong.addOperation(date);
  lessWrong.addOperation(author);

  await scraper.scrape(root);

  fs.writeFile('./pages.json', JSON.stringify(pages), () => {}); //Produces a formatted JSON with all posts.
})();
