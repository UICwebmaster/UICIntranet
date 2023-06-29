// Express module for creating web applications
const express = require("express");
// Router module for handling API requests
const apiRouter = require("./api");
// Router module for handling website requests.
const websiteRouter = require("./website");
// Creates an instance of the Express router
const router = express.Router();

// Utilisation des routes pour l'API
router.use("/api", apiRouter);
router.use("/", websiteRouter);
// Exports the router instance
module.exports = router;
