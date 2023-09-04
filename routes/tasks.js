const express = require('express');


const router = express.Router();

const { getAllTasks, getTask, createTask, updateTask, deleteTask } = require('../controller/tasks.js');

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

// router.route('/').get((req,res) => {
//     res.send("All Items");
// })

module.exports = router