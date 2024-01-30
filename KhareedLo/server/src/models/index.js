const { Sequelize, DataTypes } = require('sequelize');

const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const database = process.env.DB_NAME;
const encodedPassword = encodeURIComponent(password);

// ('mailto:postgres://user:pass@example.com:5432/dbname')
const connectionString = `postgres://${user}:${encodedPassword}@${host}:${port}/${database}`;
const sequelize = new Sequelize(connectionString, {dialect: "postgres"})

sequelize.authenticate().then(() => {
    console.log(`Database connected to khareedlo`)
}).catch((err) => {
    console.log(err)
})


const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.users = require('./userModel.js')(sequelize, DataTypes);
db.forms = require('./formModel.js')(sequelize, DataTypes);

module.exports = db