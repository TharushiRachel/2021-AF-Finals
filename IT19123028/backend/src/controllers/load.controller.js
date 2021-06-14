const Load = require('../models/loads.model');

const createLoad = async(req,res)=>{
    if(req.body){
        const load = new Load(req.body);
        load.save()
        .then(data=>{
            res.status(200).send({data:data});
        })
        .catch(error =>{
            res.status(500).send({error: error.message});
        });
    }
}

const getLoad = async(req,res)=>{
    await Load.find({}).populate('loads','code name load_count amount')
    .then(data => {
        res.status(200).send({ data: data });
      })
      .catch(error => {
        res.status(500).send({ error: error.message });
      });
}

// const calculateAmount = async(req,res)=>{
//     if(req.params && req.params.id){
//         const load = await Load.findById(req.params.id)
//         let totalAmount = 0;

//         totalAmount = load.load_count*load.amount;
//         res.status(200).send({ totalAmount: totalAmount });
//     }
// }

module.exports={
    createLoad,
    getLoad,
    //calculateAmount
}