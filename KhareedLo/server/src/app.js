const express = require("express");
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/user/userRoutes.js');
const db = require('./models');
// const formRoutes = require('./routes/utility/formRoutes.js');
const routes = require('./routes/routes.js')
require("./database/mongoose.js")
const port = process.env.PORT || 3000;
const app = express();

// Use middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Uncomment if you need CORS
const cors = require('cors');
app.use(cors());

// Sync Sequelize models with the database
db.sequelize.sync({ force: false }).then(() => {
  console.log("Database is synchronized");
}).catch(err => {
  console.error("Error synchronizing database:", err);
});

app.use('/', routes);



// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
