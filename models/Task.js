const mongoose= require('mongoose');

const TaskSchema = new mongoose.Schema({   //creating scema for document
    name:{
      type:String,
      required:[true,'you cant create a task without a name:'],
      trim:true,
      maxlength:[20,'name should not be more than 20 chars:']
    },
    completed:{
        type:Boolean,
        default:false
    }
})

module.exports=mongoose.model('Task',TaskSchema) // create model with name task following schema 