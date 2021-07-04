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
    .then(scheme => {
      console.log(scheme);
      return scheme;
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

function add(schemeData) {
  return db("schemes")
    .insert(schemeData)
    .then(schemeID => {
      console.log(schemeID);
      return findById(schemeID[0]); // schemeID will only return the new scheme ID you need to call fuction
    });
}
// works

function update(changes, id) {
  return db("schemes")
    .where({ id: id })
    .update(changes)
    .then(count => {
      return findById(id);
    });
}
// works

function remove(id) {
  return db("schemes")
    .where({ id: id })
    .del()
    .then(schemes => {
      return schemes;
    });
  // works it gives me a number but i want the deleted obj
}
