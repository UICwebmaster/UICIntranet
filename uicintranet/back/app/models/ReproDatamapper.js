const CoreDataMapper = require("./CoreDataMapper");
const client = require("./helpers/database");
const Request = require("tedious").Request;

class ReproDataMapper extends CoreDataMapper {
  /* static tableName = '[BaseApplicationIntranetTest].[dbo].[PSTK_ViewListDemandeRepro]'; */

  constructor() {
    super();
  }

  async findAllRepro() {
    return new Promise((resolve, reject) => {
      let results = [];

      const request = new Request(
        `EXEC BaseApplicationIntranetTest.dbo.PSTK_ViewListDemandeRepro`,
        function (err) {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        }
      );

      request.on("row", function (columns) {
        let result = {};
        columns.forEach(function (column) {
          result[column.metadata.colName] = column.value;
        });
        results.push(result);
      });

      client.execSql(request);
    });
  }
}

module.exports = new ReproDataMapper();
