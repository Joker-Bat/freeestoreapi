// 3rd party modules
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = require('./app');

// DB Connection Details (URL + Password)
const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

// DB Connection
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then('Connected To DB Successfully! 👲')
  .catch((err) => console.log('Error in DB Connection 🎗️', err));

// Watch for Errors in connection after initial establish
mongoose.connection.on('error', (err) => {
  console.log('Error in DB Connection 🚨', err);
});

// Run server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
