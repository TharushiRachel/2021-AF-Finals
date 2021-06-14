const Vehicle = require('../models/vehicles.model');

const createVehicle = async(req,res)=>{
    if(req.body){
        const vehicle = new Vehicle(req.body);
        vehicle.save()
        .then(data=>{
            res.status(200).send({data:data});
        })
        .catch(error =>{
            res.status(500).send({error: error.message});
        });
    }
}

const getVehicle = async(req,res)=>{
    await Vehicle.find({}).populate('vehicles','name description')
    .then(data => {
        res.status(200).send({ data: data });
      })
      .catch(error => {
        res.status(500).send({ error: error.message });
      });
}

const getLoadforVehicle = async(req,res)=>{
    if(req.params && req.params.id){
        await Vehicle.findById(req.params.id)
        .populate('loads', 'code name load_count amount')
        .then(data=>{
            res.status(200).send({loads: data.loads});
           })
           .catch(error=>{
            res.status(500).send({error: error.message});
           })
    }
}



const deleteVehicle = async(req,res)=>{
    let vehicleId = req.params.id;
    await Vehicle.findByIdAndDelete(vehicleId)
    .then(()=>{
        res.status(200).send({status: "Vehicle Deleted"});
    })
    .catch(error => {
        res.status(500).send({ error: error.message });
      });
}


const calculateAmount = async (req, res) => {
    if (req.params && req.params.id) {
      const vehicle = await Vehicle.findById(req.params.id).populate('loads', 'load_count amount')
      let totalAmount = 0;
  
      if (vehicle.loads.length > 0) {
        vehicle.loads.map((load) => {
          totalAmount += load.amount*load.load_count;
        });
      }
      res.status(200).send({ totalAmount: totalAmount });
    }
  }

module.exports={
    createVehicle,
    getVehicle,
    getLoadforVehicle,
    deleteVehicle,
    calculateAmount
}