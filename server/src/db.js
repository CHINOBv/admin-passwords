const { set, connect } = require("mongoose");
require("dotenv").config();
const URI = process.env.DB_HOST;

const startConnectionDB = () =>
  new Promise((resolve, reject) => {
    set("useUnifiedTopology", true);
    const dbOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    };

    connect(`${URI}`, dbOptions, (error) => {
      if (error) reject(error);
      if (!error) resolve("DB is Connected");
    });
  });
module.exports = { startConnectionDB };
