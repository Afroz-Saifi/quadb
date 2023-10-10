const express = require("express");
const cors = require('cors')
const db = require("./models/index");
const { UserRouter } = require("./routes/users.routes");

const app = express();
app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/view/index.html'); 
  });

app.get('/users', (req, res) => {
    res.sendFile(__dirname + '/view/users.html')
})

app.use('/', UserRouter)

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("server running on port 3001");
  });
});
