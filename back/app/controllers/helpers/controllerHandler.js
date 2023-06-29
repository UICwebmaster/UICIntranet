function controllerHandler(controller) {
  // Returns an async function that takes the request, response, and next middleware function
  return async (req, res, next) => {
    try {
      // Calls the provided controller function with the request, response, and next middleware function
      await controller(req, res, next);
    } catch (err) {
      // If an error is thrown, passes it to the next middleware function for error handling
      next(err);
    }
  };
}
module.exports = controllerHandler;
