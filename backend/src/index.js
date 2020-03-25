const express = require('express');
const cors = require('cors');
const routes = require("./routes");

const app = express();

//em producao enviar o parametro "{origin: 'http://meuapp.com'}" em cors
app.use(cors());
app.use(express.json());
app.use(routes);

// porta do servidor node
app.listen(3333);


/**
 * Metodos Http:
 * GET: Buscar/listar uma informacao do backend
 * POST: criar uma informacao do backend
 * PUT: Alterar uma informacao do backend
 * DELETE: Deletar uma informacao do backend
 */

 /**
  * Tipos de parametros
  * 
  * Query: Parametros nomeados enviados na rota após "?" (filtros, paginaçao)
  * Route Params: Parametros utilizados para identificar recursos
  * Request Body: Corpo da requisicao, utilizado para criar ou alterar um recurso
  */
 /**
  * SQL: Mysql, SQLite, Postgresql, Sql Server
  * NoSql: MongoDB, CouchDB
  */
 /**
  * Driver: SELEECT * FROM ....
  * Query Builder: table('users').select('*').where()
  */



