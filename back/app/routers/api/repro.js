//import Modules
const express = require("express");
const { reproController } = require("../../controllers/api");
const controllerHandler = require("../../controllers/helpers/controllerHandler");

//Create instance of express router
const router = express.Router();

router.get(
  "/",
  controllerHandler(reproController.findAllRepro.bind(reproController))
);

module.exports = router;
