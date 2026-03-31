
const getAllTasks =(req,res)=>{
    res.send('all tasks')
}
const createTask =(req,res)=>{
    res.json(req.body)

}
const getSingleTask =(req,res)=>{
    res.json({task:"single task",id:req.params.id})
}
const updateTask =(req,res)=>{
    res.send('task updated')
}
const deleteTask =(req,res)=>{
    res.send('task deleted')
}
module.exports={
    getAllTasks,
    createTask,
    getSingleTask,
    updateTask,
     deleteTask
}