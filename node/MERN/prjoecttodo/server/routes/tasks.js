//create a task router

const express = require('express');
const Task = require('../models/task');
const router = express.Router();

//get request

router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
})

//post request

router.post('/', async (req, res) => {
    const {title,description,dueDate,priority} = req.body;
    const newTask = new Task({
        title,
        description,
        dueDate,
        priority
    })
    try {
        const task = await newTask.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({message:error.message});
    }
})

//put request 

router.put('/:id', async (req, res) => {
    const {id} = req.params;
    const {title,description,completed,dueDate,priority} = req.body;
    try {
        
        const updatedTask = await Task.findByIdAndUpdate(id, 
            {title,description,completed,dueDate,priority},
            {new:true}
           );
        res.json(updatedTask);
       
    } catch (error) {
        
        res.status(400).json({message:error.message});
    }
})
// router.patch('/:id', async (req, res) => {
//     const {id} = req.params;
//     const updates= req.body;
//     try {
        
//         const updatedTask = await Task.findByIdAndUpdate(id, 
//             updates,
//             {new:true}
//            );
//         res.json(updatedTask);
       
//     } catch (error) {
        
//         res.status(400).json({message:error.message});
//     }

// })
//delete request 

router.delete('/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const task = await Task.findByIdAndDelete(id);  
        res.json(task);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
})


module.exports = router