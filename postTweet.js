const twitterClient = require('./twitterClient');
const { Post } = require('./models/post');

const cropStringTo240Characters = (str) => {
  let tweet = str.split('');
  if (tweet.length > 220) {
    const array = tweet.splice(0, 220);
    return array.join('') + ' [...]';
  }
  return str;
};

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
        await twitterClient.tweets.statusesUpdate({
          status: cropStringTo240Characters('[gpt-3] ' + data[0].gpt3) + ' ' + data[0].url,
        });
        data[0].published = true;
        await data[0].save();
      } catch (ex) {
        console.log('error log:', ex);
      }
    }
  }, 60000);
}

module.exports = postTweet;
