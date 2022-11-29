const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

const configuration = new Configuration({
  organization: 'org-tU9uFf5jkFxLFNlZM5AngwEC',
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const getGPT3SummaryDescription = async (url) => {
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: 'Summarize this: ' + url,
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  return response.data;
};

module.exports = getGPT3SummaryDescription;
