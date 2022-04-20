const twitterClient = require('./twitterClient');
const { Post } = require('./models/post');

async function postTweet() {
  setInterval(async function () {
    let data;
    try {
      data = await Post.find({ published: false });
    } catch (ex) {
      console.log(ex);
    }

    if (data[0]) {
      console.log('next to tweet', data[0]); //current tweet
      try {
        await twitterClient.tweets.statusesUpdate({ status: data[0].title + ' ' + data[0].url });
        data[0].published = true;
        await data[0].save();
      } catch (ex) {
        console.log('error?', ex.message);
      }
    }
  }, 60000);
}

module.exports = postTweet;
