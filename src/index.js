// import express
const express = require("express");

// internal imports
const routes = require("./routes");
const connectToDatabase = require("./config/connection");

// new instance of app created
const app = express();

// declare a port
const PORT = process.env.PORT || 4000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// use internal routers via the express module
app.use(routes);

// fn to create connection and listen to port
const init = async () => {
  try {
    // call fn to connect to mongoDB
    await connectToDatabase();

    // server listen on PORT
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(`[ERROR]: Failed to start server | ${error.message}`);
  }
};

init();
