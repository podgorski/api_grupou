module.exports = (sequelize, Sequelize) => {
  const Usuario = sequelize.define("usuario", {
    nome_completo: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING(50)
    },
    ativo: {
      type: Sequelize.BOOLEAN
    }
  })

  return Usuario
}