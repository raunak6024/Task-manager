const Task =require('../models/Task') 

const getAllTasks = async (req,res)=>{
   try{
    const tasks = await Task.find({})
    res.status(201).json({tasks})
   }catch(error){
     res.status(500).json({msg:error})
   }
}
const createTask = async (req,res)=>{
   try{
    const task = await Task.create(req.body)
    res.status(201).json({task})
   }catch(error){
     res.status(500).json({msg:error})
   }

}
const getSingleTask = async (req,res)=>{
     try{
    const {id:taskid} =req.params   
    const task = await Task.findOne({_id:taskid})
    if(!task){
        return res.status(404).json({msg:`no task is found with the id ${taskid} `})
    }
    res.status(201).json({task})
   }catch(error){
     res.status(500).json({msg:error})
   }
}
const updateTask =async (req,res)=>{
    try{
    const {id:taskid} =req.params   
    const task = await Task.findOneAndUpdate({_id:taskid},req.body,{
        new:true,
        runValidators:true
    })
    if(!task){ 
        return res.status(404).json({msg:`no task is found with the id ${taskid} `})
    }
    res.status(201).json({task})
   }catch(error){
     res.status(500).json({msg:error})
   }
}
const deleteTask = async (req,res)=>{
    try{
    const {id:taskid} =req.params   
    const task = await Task.findOneAndDelete({_id:taskid})
    if(!task){ 
        return res.status(404).json({msg:`no task is found with the id ${taskid} `})
    }
    res.status(201).json({task})
   }catch(error){
     res.status(500).json({msg:error})
   }
}
module.exports={
    getAllTasks,
    createTask,
    getSingleTask,
    updateTask,
     deleteTask
}