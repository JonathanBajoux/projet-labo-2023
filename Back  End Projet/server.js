require ("dotenv").config();

const express = require('express');
require('express-async-errors');

const cors = require('cors')
const router = require('./routers/router')

//contact du .env
const {PORT, NODE_ENV} = process.env;

const db = require('./models')

db.sequelize.authenticate()
    .then(() => console.log('Connection à la DB réussie'))
    .catch((error) => console.log(`Connection à la DB annulée : ${error}`));

  if (NODE_ENV === 'development') {
    db.sequelize.sync({ alter: { drop: false}});
  };


const app = express();

app.use(cors());
app.use(express.json())

app.use('/api', router)

app.listen(PORT, () => {
    console.log(`Le serveur écoute sur le port : ${ PORT }` );
});