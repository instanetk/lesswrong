const mongoose = require('mongoose');
// const config = require('config');
require('dotenv').config();

module.exports = function () {
  // const db = config.get('db');
  const db = process.env.DB;
  //   mongoose.set('useCreateIndex', true);
  mongoose.connect(db).then(() => console.log(`Connected to ${db}...`));
};
