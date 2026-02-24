const express = require('express');
const router = express.Router();

const tasksController = require('../controllers/tasksController');

router.get('/',tasksController.getAllTasks);
router.post('/',tasksController.createTasks);
router.delete('/:id',tasksController.deleteTasks);
router.put('/:id', tasksController.updateTask);

module.exports = router;