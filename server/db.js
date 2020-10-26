const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("mongoose connected"))
  .catch((err) => console.log(err));

const db = mongoose.connection;

db.once("open", (err) => {
  if (err) console.log(err);
  console.log("connected to db!");
});
