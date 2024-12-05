const express = require('express');
const routes = express.Router();
const {SAVE} = require('../global/_var');

const getInfoController = require('../controller/getInfo.controller');

routes.post(SAVE,getInfoController.saveInformacion);

module.exports = routes;