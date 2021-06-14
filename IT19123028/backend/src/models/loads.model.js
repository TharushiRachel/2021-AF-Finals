const mongoose = require('mongoose');

const LoadSchema = new mongoose.Schema({
    code:{type:String, required:true, trim:true},
    name:{type:String, required:true, trim:true},
    load_count:{type:Number, required:true},
    amount:{type:Number, required:true},
    vehicles:[{type: mongoose.Schema.Types.ObjectId,required: false, ref:'vehicles'}]
});

const Load = mongoose.model('loads', LoadSchema);
module.exports=Load;