const mongoose = require('mongoose');

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
