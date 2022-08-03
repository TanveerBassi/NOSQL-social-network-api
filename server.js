const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const init = async () => {
  await mongoose.connect(
    process.env.MONGODB_URI ||
      `mongodb://localhost:27017/${process.env.DB_NAME}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
};

init();
