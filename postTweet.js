const twitterClient = require('./twitterClient');

async function postTweet() {
  const data = await twitterClient.tweets.statusesUpdate({ status: 'hello world' });
  console.log(data);
}

module.exports = postTweet;
