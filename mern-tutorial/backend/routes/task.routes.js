const express = require('express');
const router = express.Router();

//Models
const Task = require('../models/task');

//Read
router.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

//Get Single
router.get('/:id', async (req, res) => {
    const task = await Task.findById(req.params.id);
    res.json(task);
});


//Create
router.post('/', async (req,res) => {
    const { title, description  } = req.body;
    const task = new Task({ title, description });
    await task.save();
    res.json({ status: 'Saved' });
});

//Update
router.put('/:id', async (req, res) => {
    await Task.findByIdAndUpdate(req.params.id, {$set: req.body });
    const json = await Task.find();
    console.log(json);
    res.json('Updated');
});

//Delete
router.delete('/:id', async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    const json = await Task.find();
    console.log(json);
    res.json('Deleted');
})

module.exports = router;