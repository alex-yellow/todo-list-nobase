const express = require('express');
const router = express.Router();
const tasks = require('../models/task');

router.get('/', function(req, res){
    console.log(tasks);
    res.render('index', {title:'Home', tasks});
});

router.get('/create', function(req, res){
    res.render('create', {title: 'Add task'});
});

router.post('/create', function(req, res){
    const task = req.body.task;
    tasks.push(task);
    res.redirect('/');
});

router.get('/edit/:id', function(req, res){
    const id = req.params.id;
    const task = tasks[id];
    res.render('edit', {title: 'Edit', task, index:id});
});
router.post('/edit/:id', function(req, res){
    const id = req.params.id;
    const task = req.body.task;
    tasks.splice(id,1,task);
    res.redirect('/');
});

router.post('/delete', function(req, res){
    const id = req.body.id;
    tasks.splice(id,1);
    res.redirect('/');
});

module.exports = router;