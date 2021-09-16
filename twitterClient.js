const { TwitterClient } = require('twitter-api-client');
require('dotenv').config();

const twitterClient = new TwitterClient({
  apiKey: process.env.TWITTER_CONSUMER_KEY,
  apiSecret: process.env.TWITTER_CONSUMER_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN_KEY,
  accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

module.exports = twitterClient;
