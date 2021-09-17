const { Post } = require('./models/post');
// const articles = require('./pages.json');

async function upload(articles) {
  for (let i = 0; i < articles.length; i++) {
    const exists = await Post.find({ url: articles[i].url });
    console.log('query', exists);
    if (exists[0] === undefined) {
      const article = new Post(articles[i]);
      console.log('new article', articles[i]);
      try {
        await article.save();
      } catch (ex) {
        console.log(ex.message);
      }
    }
  }
}

module.exports = upload;
