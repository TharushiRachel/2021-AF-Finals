const express = require('express');
const router = express.Router();
const controller = require('../controllers/vehicle.controller');

module.exports= function(){
    router.post('/create', controller.createVehicle);
    router.get('/', controller.getVehicle);
    router.get('/:id', controller.getLoadforVehicle);
    router.delete('/delete/:id', controller.deleteVehicle);
    router.get('/amount/:id', controller.calculateAmount);
    return router;
}