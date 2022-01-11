const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/st-db";

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));
