const express = require('express');
const router = express.Router();

//Models
const Task = require('../models/task');

router.get('/', (req, res) => {
    Task.find(function(err, tasks) {
        console.log(tasks, { name:'Hola'});
    });
    res.json({
        status: 'API Works!'
    });
    //res.send('Hello world');
});

module.exports = router;