const express = require("express");
const db = require("./models/index");

const app = express();
app.use(express.json());

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("server running on port 3001");
  });
});
