const Sequelize = require("sequelize");
const UserModel = require("./model/User");
const SubscribeModel = require("./model/Subscribe");

const sequelize = new Sequelize("servicium", "dinesh", "dinesh", {
  host: "localhost",
  dialect: "postgres"
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Database Connected");
    sequelize.sync();
  })
  .catch(err => console.error("Unable To Connect to Database", err));

let User = UserModel(sequelize, Sequelize);
let Subscribe = SubscribeModel(sequelize, Sequelize);

module.exports = {
  User,
  Subscribe
};
