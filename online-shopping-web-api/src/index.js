const app = require('./app');

const mongoose = require('mongoose');

require('dotenv').config({ path: __dirname + '/.env' });
const start = async () => {
  const DB = process.env.MONGO_URL.replace(
    '<password>',
    process.env.MONGO_PASSWORD
  );
  mongoose
    .connect(DB, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('DB connection successful!'))
    .catch((err) => console.log(err));
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`App running on port ${port}...`);
  });
};
start();
