const express = require("express");
const reproRouter = require("./repro");
const { apiController } = require("../../controllers/api");
const NoResourceFoundError = require("../../errors/NoResourceFoundError");
const apiErrorHandler = require("../../errors/helpers/apiErrorHandler");

const router = express.Router();

router.all("/", apiController.getHome);

router.use("/reprographie", reproRouter);

router.use((_, res, next) => {
  next(new NoResourceFoundError());
});

router.use(apiErrorHandler);

module.exports = router;
