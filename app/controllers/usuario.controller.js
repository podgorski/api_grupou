const db = require("../models");
const Usuario = db.usuario;

exports.create = (req, res) => {
  const usuario = {
    nome_completo: req.body.nome_completo,
    email: req.body.email,
    ativo: req.body.ativo ? req.body.ativo : false
  }

  Usuario.create(usuario).then((data) => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Erro ao Criar Usuário"
    })
  })
}