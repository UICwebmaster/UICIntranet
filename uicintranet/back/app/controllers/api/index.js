const reproController = require("./ReproController");
/* const usersController = require("./usersController"); */

const apiController = {
  getHome(request, response) {
    // Constructs the full URL for the API documentation based on the protocol, host, and API documentation route
    const fullURL = `${request.protocol}://${request.get("host")}${
      process.env.API_DOCUMENTATION_ROUTE ?? "/api-docs"
    }`;
    // Sends the URL for the API documentation as a JSON response
    response.json({ documentation_url: fullURL });
  },
};

module.exports = {
  apiController,
  reproController,
};
