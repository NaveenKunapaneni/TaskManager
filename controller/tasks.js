const Task = require('../models/Task.js');
const getAllTasks = async (req,res) => {
    try{
        const alltask = await Task.find({});
        console.log("This hit server");
        res.status(200).json([...alltask])
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}


const createTask = async (req,res) => {
    try{
        const task = await Task.create(req.body)
        res.status(201).json({ task })
    }catch (error) {
        res.status(500).json({ msg: error })
    }
}

const getTask = async (req,res) => {
    try{
        //to extract only id from the parameters we use array destructuring and retrieve only id from the parameters.
        const { id: taskId } = req.params
        const task = await Task.findOne({ _id: taskId });
        if (!task) {
            return res.status(404).json({ msg:`No task with id: ${taskId}` })
        }

        res.status(200).json({ task });
    }catch (error){
        res.status(500).json({ msg: error })
    }
}

const deleteTask = async (req,res) => {
    try{
        const {id: taskId } = req.params
        const task = await Task.findByIdAndDelete({ _id: taskId })
        if (!task) {
            return res.status(400).json({ msg: `Cannot find the task id: ${taskId} `})
        }
        res.status(200).json({ task })
    }catch (error) {
        res.status(500).json({ msg: error })
    }
}

const updateTask = async (req,res) => {
    try{
        const {id: taskId} = req.params
        const task = await Task.findByIdAndUpdate({_id: taskId}, req.body, { runValidators: true, new: true })
        if (!task) { 
            return res.status(400).json({ msg: `Cannot find the task id: ${taskId} `})
        }
        res.status(200).json({ task })
    }catch (error) {
        res.status(500).json({ msg: error })
    }
}


module.exports = { getAllTasks,
                    getTask,
                    updateTask,
                    createTask,
                    deleteTask }