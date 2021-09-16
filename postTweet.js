const twitterClient = require('./twitterClient');
const { Post } = require('./models/post');

async function postTweet() {
  setInterval(async function () {
    const data = await Post.find({ published: false });
    console.log(data[0]); //current tweet
    await twitterClient.tweets.statusesUpdate({ status: data[0].title + ' ' + data[0].url });

    try {
      data[0].published = true;
      await data[0].save();
    } catch (ex) {
      console.log('error?', ex.message);
    }
  }, 5000);
}

module.exports = postTweet;
