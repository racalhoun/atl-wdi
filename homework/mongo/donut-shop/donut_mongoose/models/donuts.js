//requirements: require mongoose
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//create your donut schema:
const Schema = mongoose.Schema;
var donutSchema = new Schema({
    
    name: String,
    description: String,
    img: String,
    price: Number,
    qty: Number
})
    

var NewDonutSchema = new Schema({
    name: String,
    description: String,
    img:String,  
    price: Number,
    qty: Number
        
});
    const DonutModel = mongoose.model('Donuts', donutSchema )
    const NewDonuts = mongoose.model('newDonuts', NewDonutSchema )
module.exports = {
    DonutModel: DonutModel,
    NewDonuts: NewDonuts
};
    
    
    
    
   
  
//export your donut with module.exports()
