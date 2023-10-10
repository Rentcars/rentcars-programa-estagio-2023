module.exports = (sequelize, Sequelize) => {
  const Firm = sequelize.define('firm', {
    name: {
        type: Sequelize.STRING,
    },
    address: {
        type: Sequelize.STRING,
    },
    description: {
        type: Sequelize.TEXT
    }
  })
  return Firm
}