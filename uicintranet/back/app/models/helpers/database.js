const Connection = require("tedious").Connection;
require("dotenv").config();

// Create connection to database
const config = {
  server: process.env.DB_SERVER,
  authentication: {
    type: "default",
    options: {
      userName: process.env.DB_USER, // update me
      password: process.env.DB_PWD, // update me
    },
  },
  options: {
    database: process.env.DB_NAME,
    trustServerCertificate: true,
  },
};

const connection = new Connection(config);

connection.on("connect", function (err) {
  if (err) {
    console.error("Error connecting:", err);
  } else {
    console.log("Server Connected");
  }
});

connection.connect();

module.exports = connection;
