const mongoose = require('mongoose');
const app = require('./app.js';)

mongoose.connect(
    process.env.DATABASE_CONN,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => {
      app.listen(3000);
    }
  );