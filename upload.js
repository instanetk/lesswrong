const { Post } = require('./models/post');
const getGPT3SummaryDescription = require('./gpt3');

async function upload(articles) {
  for (let i = 0; i < articles.length; i++) {
    const exists = await Post.find({ url: articles[i].url });
    console.log('query', exists);
    if (exists[0] === undefined) {
      const { choices } = await getGPT3SummaryDescription(articles[i].url);
      const summary = choices[0].text.trim();
      const article = new Post(articles[i]);
      article.gpt3 = summary;
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
