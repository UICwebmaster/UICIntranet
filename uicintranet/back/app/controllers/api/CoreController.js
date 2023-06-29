class CoreController {
  static dataMapper;
  async findAll(_, response) {
    // Waits for the dataMapper to find all the data in the database
    const results = await this.constructor.dataMapper.findAll();
    // Sends the results as a JSON response.
    response.json(results);
  }

  async findByPk(request, response) {
    // Extracts the ID parameter from the request
    const { id } = request.params;

    // Searches for the record in the database by its primary key
    const results = await this.constructor.dataMapper.findByPk(id);
    // If a matching record is found, sends it as a JSON response
    if (results) {
      return response.json(results);
    }
    // If no matching record is found, returns a 204 No Content status code
    return response.status(204).send();
  }

  async create(request, response) {
    // Extracts the data for the new record from the request body
    const createObj = request.body;
    // Creates the new record in the database using the dataMapper
    const createdObj = await this.constructor.dataMapper.create(createObj);
    // Sends the newly created record as a JSON response with a 201 Created status code
    response.status(201).json(createdObj);
  }

  async update(request, response) {
    // Extracts the ID parameter from the request
    const { id } = request.params;
    // Extracts the new data for the record from the request body
    const modObject = request.body;
    // Updates the record in the database using the dataMapper
    const modifiedItem = await this.constructor.dataMapper.update(
      id,
      modObject
    );
    // Sends the modified record as a JSON response
    response.json(modifiedItem);
  }

  async delete(request, response) {
    // Extracts the ID parameter from the request
    const { id } = request.params;
    // Deletes the record from the database using the dataMapper
    await this.constructor.dataMapper.delete(id);
    // Sends a 204 No Content response
    return response.status(204).send();
  }
}

module.exports = CoreController;
