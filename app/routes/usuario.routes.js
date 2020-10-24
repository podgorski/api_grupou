module.exports = (app) => {
  const usuario = require("../controllers/usuario.controller.js");

  var router = require("express").Router();

  router.post("/", usuario.create);

  //----

  //----
  app.use('/api/usuario', router);
}