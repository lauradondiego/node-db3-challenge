const db = require("../data/db-config");

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
};

function find() {
  return db("schemes");
}
// works and returns all schemes

function findById(id) {
  return db("schemes")
    .where({ id: id })
    .then(schemes => {
      return schemes;
    });
}
// works and returns scheme by specific ID

function findSteps(id) {
  // GET /api/schemes/:id/steps
  return db("schemes")
    .join("steps", "schemes.id", "steps.scheme_id")
    .where({ scheme_id: id })
    .orderBy("steps.step_number")
    .then(steps => {
      return steps;
    });
}
// works and finds step by id within the schemes

function add(scheme) {
  const addScheme = req.body;
  return db("schemes")
    .insert(addScheme, "scheme")
    .then(([scheme]) => {
      db("schemes")
        .where({ id })
        .then(scheme => {
          return scheme;
        });
    });
}
// does not work

function update(changes, id) {
  const changes = req.body;
  return db("schemes")
    .where({ scheme_id: id })
    .update(changes)
    .then(scheme => {
      return scheme;
    });
}
// does not work

function remove(id) {
  return db("schemes")
    .where({ id: id })
    .del()
    .then(schemes => {
      return schemes;
    });
  // works it gives me a number but i want the deleted obj
}
