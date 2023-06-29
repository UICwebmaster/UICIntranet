const CoreController = require("./CoreController");
const ReproDataMapper = require("../../models/ReproDatamapper");

class ReproController extends CoreController {
  static dataMapper = ReproDataMapper;

  constructor() {
    super();
  }

  async findAllRepro(request, response) {
    const results = await this.constructor.dataMapper.findAllRepro();
    response.json(results);
  }
}

module.exports = new ReproController();
