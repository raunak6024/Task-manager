const express=require('express')
const { getAllTasks,createTask,getSingleTask,updateTask, deleteTask } = require('../controllers/control')
const router=express.Router()


router.route('/').get(getAllTasks).post(createTask)

router.route('/:id').get(getSingleTask).patch(updateTask).delete(deleteTask)

module.exports = router