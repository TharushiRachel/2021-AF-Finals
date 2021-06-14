const express = require('express');
const router = express.Router();
const controller = require('../controllers/load.controller');

module.exports=function(){
    router.post('/create', controller.createLoad);
    router.get('/', controller.getLoad);
   // router.get('/amount/:id', controller.calculateAmount);
    return router;
}