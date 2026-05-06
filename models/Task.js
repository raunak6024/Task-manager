const mongoose= require('mongoose');

const TaskSchema = new mongoose.Schema({   //creating scema for document
    name:String ,completed:Boolean
})

module.exports=mongoose.model('Task',TaskSchema) // create model with name task following schema 