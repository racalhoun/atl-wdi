//requirements: require mongoose
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//create your donut schema:
const Schema = mongoose.Schema;
const newDonut = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    description: {
          type: String,
          required: true
    },
    img:{
        type:String,
        required: true
    },
    price:{
        type:Number,
        required: true
    },
    qty:{
        type:Number,
        required: true
    }
    

    
    
    
    
   
  
//export your donut with module.exports()
