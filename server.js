'use strict';

const express = require('express');
const cors = require('cors');
const fs = require('fs');
require('dotenv').config();

// Constants
const PORT = process.env.PUERTO_SERVICIO1;
const HOST = process.env.HOST_SERVICIO1;

// App
const app = express();

// CORS
app.use(cors());

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/api/casos', (req, res)=>{
  console.log(req.body);
  res.status(200).send({message: "Recibido!"});
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);